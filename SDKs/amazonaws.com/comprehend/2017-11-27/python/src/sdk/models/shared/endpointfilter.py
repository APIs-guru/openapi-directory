from dataclasses import dataclass, field
from datetime import datetime
from marshmallow import fields
import dateutil.parser
from typing import Enum,Optional
from dataclasses_json import dataclass_json
from . import endpointstatus_enum


@dataclass_json
@dataclass
class EndpointFilter:
    creation_time_after: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'CreationTimeAfter', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    creation_time_before: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'CreationTimeBefore', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    model_arn: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ModelArn' }})
    status: Optional[endpointstatus_enum.EndpointStatusEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Status' }})
    
