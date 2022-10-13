from dataclasses import dataclass, field
from typing import Enum,List,Optional
from dataclasses_json import dataclass_json
from . import clusterfield_enum


@dataclass_json
@dataclass
class DescribeClustersRequest:
    clusters: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'clusters' }})
    include: Optional[List[clusterfield_enum.ClusterFieldEnum]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'include' }})
    
