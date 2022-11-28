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
class GetResourceConfigHistoryRequest:
    r"""GetResourceConfigHistoryRequest
    The input for the <a>GetResourceConfigHistory</a> action.
    """
    
    resource_id: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('resourceId') }})
    resource_type: ResourceTypeEnum = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('resourceType') }})
    chronological_order: Optional[ChronologicalOrderEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('chronologicalOrder') }})
    earlier_time: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('earlierTime'), 'encoder': utils.datetimeisoformat(True), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    later_time: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('laterTime'), 'encoder': utils.datetimeisoformat(True), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    limit: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('limit') }})
    next_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('nextToken') }})
    
