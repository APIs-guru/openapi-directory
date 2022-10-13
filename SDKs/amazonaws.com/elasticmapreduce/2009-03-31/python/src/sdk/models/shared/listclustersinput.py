from dataclasses import dataclass, field
from datetime import datetime
from marshmallow import fields
import dateutil.parser
from typing import Enum,List,Optional
from dataclasses_json import dataclass_json
from . import clusterstate_enum


@dataclass_json
@dataclass
class ListClustersInput:
    cluster_states: Optional[List[clusterstate_enum.ClusterStateEnum]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ClusterStates' }})
    created_after: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'CreatedAfter', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    created_before: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'CreatedBefore', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    marker: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Marker' }})
    
