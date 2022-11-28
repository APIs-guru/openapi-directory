from dataclasses import dataclass, field
from typing import List,Optional
from . import *


@dataclass
class DbClusterParameterGroupsMessage:
    r"""DbClusterParameterGroupsMessage
    Represents the output of <a>DBClusterParameterGroups</a>.
    """
    
    db_cluster_parameter_groups: Optional[List[DbClusterParameterGroup]] = field(default=None)
    marker: Optional[str] = field(default=None)
    
