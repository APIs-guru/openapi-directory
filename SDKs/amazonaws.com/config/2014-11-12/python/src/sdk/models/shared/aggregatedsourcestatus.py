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
class AggregatedSourceStatus:
    r"""AggregatedSourceStatus
    The current sync status between the source and the aggregator account.
    """
    
    aws_region: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('AwsRegion') }})
    last_error_code: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('LastErrorCode') }})
    last_error_message: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('LastErrorMessage') }})
    last_update_status: Optional[AggregatedSourceStatusTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('LastUpdateStatus') }})
    last_update_time: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('LastUpdateTime'), 'encoder': utils.datetimeisoformat(True), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    source_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('SourceId') }})
    source_type: Optional[AggregatedSourceTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('SourceType') }})
    
