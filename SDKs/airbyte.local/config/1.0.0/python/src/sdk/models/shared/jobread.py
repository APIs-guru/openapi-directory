from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class JobRead:
    config_id: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('configId') }})
    config_type: JobConfigTypeEnum = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('configType') }})
    created_at: int = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('createdAt') }})
    id: int = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    status: JobStatusEnum = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('status') }})
    updated_at: int = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('updatedAt') }})
    
