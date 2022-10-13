from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import notification


@dataclass_json
@dataclass
class WorkspaceCreate:
    anonymous_data_collection: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'anonymousDataCollection' }})
    email: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'email' }})
    name: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'name' }})
    news: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'news' }})
    notifications: Optional[List[notification.Notification]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'notifications' }})
    security_updates: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'securityUpdates' }})
    
