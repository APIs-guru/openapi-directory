from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import List,Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class DescribeEventsMessage:
    r"""DescribeEventsMessage
    <p/>
    """
    
    duration: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Duration') }})
    end_time: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('EndTime'), 'encoder': utils.datetimeisoformat(True), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    event_categories: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('EventCategories') }})
    filters: Optional[List[Filter]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Filters') }})
    marker: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Marker') }})
    max_records: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('MaxRecords') }})
    source_identifier: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('SourceIdentifier') }})
    source_type: Optional[SourceTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('SourceType') }})
    start_time: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('StartTime'), 'encoder': utils.datetimeisoformat(True), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    
