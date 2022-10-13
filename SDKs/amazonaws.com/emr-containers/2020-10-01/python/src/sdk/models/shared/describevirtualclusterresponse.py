from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import virtualcluster


@dataclass_json
@dataclass
class DescribeVirtualClusterResponse:
    virtual_cluster: Optional[virtualcluster.VirtualCluster] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'virtualCluster' }})
    
