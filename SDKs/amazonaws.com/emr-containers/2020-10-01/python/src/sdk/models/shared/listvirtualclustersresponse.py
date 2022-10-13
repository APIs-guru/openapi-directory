from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import virtualcluster


@dataclass_json
@dataclass
class ListVirtualClustersResponse:
    next_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'nextToken' }})
    virtual_clusters: Optional[List[virtualcluster.VirtualCluster]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'virtualClusters' }})
    
