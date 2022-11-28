from dataclasses import dataclass, field
from typing import List,Optional
from enum import Enum
from . import *


@dataclass
class CacheNodeTypeSpecificParameter:
    r"""CacheNodeTypeSpecificParameter
    A parameter that has a different value for each cache node type it is applied to. For example, in a Redis cluster, a <code>cache.m1.large</code> cache node type would have a larger <code>maxmemory</code> value than a <code>cache.m1.small</code> type.
    """
    
    allowed_values: Optional[str] = field(default=None)
    cache_node_type_specific_values: Optional[List[CacheNodeTypeSpecificValue]] = field(default=None)
    change_type: Optional[ChangeTypeEnum] = field(default=None)
    data_type: Optional[str] = field(default=None)
    description: Optional[str] = field(default=None)
    is_modifiable: Optional[bool] = field(default=None)
    minimum_engine_version: Optional[str] = field(default=None)
    parameter_name: Optional[str] = field(default=None)
    source: Optional[str] = field(default=None)
    
