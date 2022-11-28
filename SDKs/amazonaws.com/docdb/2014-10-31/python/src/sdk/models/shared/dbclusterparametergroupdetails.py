from dataclasses import dataclass, field
from typing import List,Optional
from . import *


@dataclass
class DbClusterParameterGroupDetails:
    r"""DbClusterParameterGroupDetails
    Represents the output of <a>DBClusterParameterGroup</a>.
    """
    
    marker: Optional[str] = field(default=None)
    parameters: Optional[List[Parameter]] = field(default=None)
    
