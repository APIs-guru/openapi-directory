from dataclasses import dataclass, field
from datetime import datetime
from marshmallow import fields
import dateutil.parser
from typing import Enum,Optional
from dataclasses_json import dataclass_json
from . import tunnelstatus_enum


@dataclass_json
@dataclass
class TunnelSummary:
    created_at: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'createdAt', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    description: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'description' }})
    last_updated_at: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'lastUpdatedAt', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    status: Optional[tunnelstatus_enum.TunnelStatusEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'status' }})
    tunnel_arn: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'tunnelArn' }})
    tunnel_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'tunnelId' }})
    
