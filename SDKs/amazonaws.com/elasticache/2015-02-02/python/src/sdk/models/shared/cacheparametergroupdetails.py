from dataclasses import dataclass, field
from typing import List,Optional
from . import *


@dataclass
class CacheParameterGroupDetails:
    r"""CacheParameterGroupDetails
    Represents the output of a <code>DescribeCacheParameters</code> operation.
    """
    
    cache_node_type_specific_parameters: Optional[List[CacheNodeTypeSpecificParameter]] = field(default=None)
    marker: Optional[str] = field(default=None)
    parameters: Optional[List[Parameter]] = field(default=None)
    
