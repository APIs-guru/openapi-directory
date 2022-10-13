from dataclasses import dataclass, field
from datetime import datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from dataclasses_json import dataclass_json
from . import endpoint


@dataclass_json
@dataclass
class Node:
    availability_zone: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'AvailabilityZone' }})
    endpoint: Optional[endpoint.Endpoint] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Endpoint' }})
    node_create_time: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'NodeCreateTime', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    node_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'NodeId' }})
    node_status: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'NodeStatus' }})
    parameter_group_status: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ParameterGroupStatus' }})
    
