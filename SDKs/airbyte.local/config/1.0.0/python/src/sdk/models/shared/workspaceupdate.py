from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import notification


@dataclass_json
@dataclass
class WorkspaceUpdate:
    anonymous_data_collection: bool = field(default=None, metadata={'dataclasses_json': { 'field_name': 'anonymousDataCollection' }})
    display_setup_wizard: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'displaySetupWizard' }})
    email: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'email' }})
    initial_setup_complete: bool = field(default=None, metadata={'dataclasses_json': { 'field_name': 'initialSetupComplete' }})
    news: bool = field(default=None, metadata={'dataclasses_json': { 'field_name': 'news' }})
    notifications: Optional[List[notification.Notification]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'notifications' }})
    security_updates: bool = field(default=None, metadata={'dataclasses_json': { 'field_name': 'securityUpdates' }})
    workspace_id: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'workspaceId' }})
    
