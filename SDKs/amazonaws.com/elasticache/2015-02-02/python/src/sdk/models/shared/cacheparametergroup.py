from dataclasses import dataclass, field
from typing import Optional


@dataclass
class CacheParameterGroup:
    r"""CacheParameterGroup
    Represents the output of a <code>CreateCacheParameterGroup</code> operation.
    """
    
    arn: Optional[str] = field(default=None)
    cache_parameter_group_family: Optional[str] = field(default=None)
    cache_parameter_group_name: Optional[str] = field(default=None)
    description: Optional[str] = field(default=None)
    is_global: Optional[bool] = field(default=None)
    
