from dataclasses import dataclass, field
from typing import Optional


@dataclass
class CacheNodeTypeSpecificValue:
    r"""CacheNodeTypeSpecificValue
    A value that applies only to a certain cache node type.
    """
    
    cache_node_type: Optional[str] = field(default=None)
    value: Optional[str] = field(default=None)
    
