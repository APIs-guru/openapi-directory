from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import clustersummary


@dataclass_json
@dataclass
class ListClustersOutput:
    clusters: Optional[List[clustersummary.ClusterSummary]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Clusters' }})
    marker: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Marker' }})
    
