from dataclasses import dataclass, field
from datetime import datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from dataclasses_json import dataclass_json
from . import routingstrategy


@dataclass_json
@dataclass
class Alias:
    alias_arn: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'AliasArn' }})
    alias_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'AliasId' }})
    creation_time: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'CreationTime', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    description: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Description' }})
    last_updated_time: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'LastUpdatedTime', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Name' }})
    routing_strategy: Optional[routingstrategy.RoutingStrategy] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'RoutingStrategy' }})
    
