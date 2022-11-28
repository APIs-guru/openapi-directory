from dataclasses import dataclass, field
from typing import List,Optional


@dataclass
class CacheParameterGroupStatus:
    r"""CacheParameterGroupStatus
    Status of the cache parameter group.
    """
    
    cache_node_ids_to_reboot: Optional[List[str]] = field(default=None)
    cache_parameter_group_name: Optional[str] = field(default=None)
    parameter_apply_status: Optional[str] = field(default=None)
    
