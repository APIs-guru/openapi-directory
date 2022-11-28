from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class WorkspaceUpdate:
    anonymous_data_collection: bool = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('anonymousDataCollection') }})
    initial_setup_complete: bool = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('initialSetupComplete') }})
    news: bool = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('news') }})
    security_updates: bool = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('securityUpdates') }})
    workspace_id: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('workspaceId') }})
    display_setup_wizard: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('displaySetupWizard') }})
    email: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('email') }})
    notifications: Optional[List[Notification]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('notifications') }})
    
