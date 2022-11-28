from dataclasses import dataclass, field
from typing import List,Optional
from . import *


@dataclass
class EngineDefaults:
    r"""EngineDefaults
    Represents the output of a <code>DescribeEngineDefaultParameters</code> operation.
    """
    
    cache_node_type_specific_parameters: Optional[List[CacheNodeTypeSpecificParameter]] = field(default=None)
    cache_parameter_group_family: Optional[str] = field(default=None)
    marker: Optional[str] = field(default=None)
    parameters: Optional[List[Parameter]] = field(default=None)
    
