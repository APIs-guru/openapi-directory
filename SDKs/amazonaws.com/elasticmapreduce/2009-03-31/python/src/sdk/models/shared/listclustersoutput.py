from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class ListClustersOutput:
    r"""ListClustersOutput
    This contains a ClusterSummaryList with the cluster details; for example, the cluster IDs, names, and status.
    """
    
    clusters: Optional[List[ClusterSummary]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Clusters') }})
    marker: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Marker') }})
    
