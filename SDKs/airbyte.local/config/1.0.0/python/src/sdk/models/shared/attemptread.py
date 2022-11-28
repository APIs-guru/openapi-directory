from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class AttemptRead:
    created_at: int = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('createdAt') }})
    id: int = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    status: AttemptStatusEnum = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('status') }})
    updated_at: int = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('updatedAt') }})
    bytes_synced: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('bytesSynced') }})
    ended_at: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('endedAt') }})
    records_synced: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('recordsSynced') }})
    
