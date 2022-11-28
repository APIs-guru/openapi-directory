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
class WorkspaceRead:
    customer_id: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('customerId') }})
    initial_setup_complete: bool = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('initialSetupComplete') }})
    name: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    slug: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('slug') }})
    workspace_id: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('workspaceId') }})
    anonymous_data_collection: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('anonymousDataCollection') }})
    display_setup_wizard: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('displaySetupWizard') }})
    email: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('email') }})
    news: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('news') }})
    notifications: Optional[List[Notification]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('notifications') }})
    security_updates: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('securityUpdates') }})
    
