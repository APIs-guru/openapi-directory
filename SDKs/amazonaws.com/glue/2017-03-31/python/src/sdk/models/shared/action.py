from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import notificationproperty


@dataclass_json
@dataclass
class Action:
    arguments: Optional[dict[str, str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Arguments' }})
    crawler_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'CrawlerName' }})
    job_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'JobName' }})
    notification_property: Optional[notificationproperty.NotificationProperty] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'NotificationProperty' }})
    security_configuration: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'SecurityConfiguration' }})
    timeout: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Timeout' }})
    
