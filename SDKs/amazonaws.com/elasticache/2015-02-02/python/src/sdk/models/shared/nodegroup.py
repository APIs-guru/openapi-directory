from dataclasses import dataclass, field
from typing import List,Optional
from . import *


@dataclass
class NodeGroup:
    r"""NodeGroup
    Represents a collection of cache nodes in a replication group. One node in the node group is the read/write primary node. All the other nodes are read-only Replica nodes.
    """
    
    node_group_id: Optional[str] = field(default=None)
    node_group_members: Optional[List[NodeGroupMember]] = field(default=None)
    primary_endpoint: Optional[Endpoint] = field(default=None)
    reader_endpoint: Optional[Endpoint] = field(default=None)
    slots: Optional[str] = field(default=None)
    status: Optional[str] = field(default=None)
    
