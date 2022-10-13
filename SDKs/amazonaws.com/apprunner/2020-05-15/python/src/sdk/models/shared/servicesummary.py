from dataclasses import dataclass, field
from datetime import datetime
from marshmallow import fields
import dateutil.parser
from typing import Enum,Optional
from dataclasses_json import dataclass_json
from . import servicestatus_enum


@dataclass_json
@dataclass
class ServiceSummary:
    created_at: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'CreatedAt', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    service_arn: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ServiceArn' }})
    service_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ServiceId' }})
    service_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ServiceName' }})
    service_url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ServiceUrl' }})
    status: Optional[servicestatus_enum.ServiceStatusEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Status' }})
    updated_at: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'UpdatedAt', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    
