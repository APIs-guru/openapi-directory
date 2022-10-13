from dataclasses import dataclass, field
from datetime import datetime
from marshmallow import fields
import dateutil.parser
from typing import Enum,Optional
from dataclasses_json import dataclass_json
from . import operationstatus_enum
from . import operationtype_enum


@dataclass_json
@dataclass
class OperationSummary:
    ended_at: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'EndedAt', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Id' }})
    started_at: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'StartedAt', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    status: Optional[operationstatus_enum.OperationStatusEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Status' }})
    target_arn: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'TargetArn' }})
    type: Optional[operationtype_enum.OperationTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Type' }})
    updated_at: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'UpdatedAt', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    
