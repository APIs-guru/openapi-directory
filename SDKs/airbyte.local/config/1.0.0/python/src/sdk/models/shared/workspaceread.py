from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import notification


@dataclass_json
@dataclass
class WorkspaceRead:
    anonymous_data_collection: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'anonymousDataCollection' }})
    customer_id: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'customerId' }})
    display_setup_wizard: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'displaySetupWizard' }})
    email: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'email' }})
    initial_setup_complete: bool = field(default=None, metadata={'dataclasses_json': { 'field_name': 'initialSetupComplete' }})
    name: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'name' }})
    news: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'news' }})
    notifications: Optional[List[notification.Notification]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'notifications' }})
    security_updates: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'securityUpdates' }})
    slug: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'slug' }})
    workspace_id: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'workspaceId' }})
    
