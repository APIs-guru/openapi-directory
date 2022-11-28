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
class WorkspaceCreate:
    name: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    anonymous_data_collection: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('anonymousDataCollection') }})
    email: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('email') }})
    news: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('news') }})
    notifications: Optional[List[Notification]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('notifications') }})
    security_updates: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('securityUpdates') }})
    
