from dataclasses import dataclass, field
from typing import Optional
from . import *


@dataclass
class NodeGroupMember:
    r"""NodeGroupMember
    Represents a single node within a node group (shard).
    """
    
    cache_cluster_id: Optional[str] = field(default=None)
    cache_node_id: Optional[str] = field(default=None)
    current_role: Optional[str] = field(default=None)
    preferred_availability_zone: Optional[str] = field(default=None)
    preferred_outpost_arn: Optional[str] = field(default=None)
    read_endpoint: Optional[Endpoint] = field(default=None)
    
