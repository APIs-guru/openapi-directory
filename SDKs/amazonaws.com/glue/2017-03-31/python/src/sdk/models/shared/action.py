from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class Action:
    r"""Action
    Defines an action to be initiated by a trigger.
    """
    
    arguments: Optional[dict[str, str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Arguments') }})
    crawler_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('CrawlerName') }})
    job_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('JobName') }})
    notification_property: Optional[NotificationProperty] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('NotificationProperty') }})
    security_configuration: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('SecurityConfiguration') }})
    timeout: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Timeout') }})
    
