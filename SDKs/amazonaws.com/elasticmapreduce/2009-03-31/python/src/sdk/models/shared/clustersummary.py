from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import clusterstatus


@dataclass_json
@dataclass
class ClusterSummary:
    cluster_arn: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ClusterArn' }})
    id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Id' }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Name' }})
    normalized_instance_hours: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'NormalizedInstanceHours' }})
    outpost_arn: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'OutpostArn' }})
    status: Optional[clusterstatus.ClusterStatus] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Status' }})
    
