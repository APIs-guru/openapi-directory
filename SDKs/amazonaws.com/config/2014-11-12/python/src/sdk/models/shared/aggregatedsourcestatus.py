from dataclasses import dataclass, field
from datetime import datetime
from marshmallow import fields
import dateutil.parser
from typing import Enum,Optional
from dataclasses_json import dataclass_json
from . import aggregatedsourcestatustype_enum
from . import aggregatedsourcetype_enum


@dataclass_json
@dataclass
class AggregatedSourceStatus:
    aws_region: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'AwsRegion' }})
    last_error_code: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'LastErrorCode' }})
    last_error_message: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'LastErrorMessage' }})
    last_update_status: Optional[aggregatedsourcestatustype_enum.AggregatedSourceStatusTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'LastUpdateStatus' }})
    last_update_time: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'LastUpdateTime', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    source_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'SourceId' }})
    source_type: Optional[aggregatedsourcetype_enum.AggregatedSourceTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'SourceType' }})
    
