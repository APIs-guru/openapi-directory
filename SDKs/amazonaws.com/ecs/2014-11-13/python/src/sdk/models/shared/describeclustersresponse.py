from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import cluster
from . import failure


@dataclass_json
@dataclass
class DescribeClustersResponse:
    clusters: Optional[List[cluster.Cluster]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'clusters' }})
    failures: Optional[List[failure.Failure]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'failures' }})
    
