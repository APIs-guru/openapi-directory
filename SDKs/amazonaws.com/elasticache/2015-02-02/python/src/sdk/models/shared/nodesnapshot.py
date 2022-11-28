from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from . import *


@dataclass
class NodeSnapshot:
    r"""NodeSnapshot
    Represents an individual cache node in a snapshot of a cluster.
    """
    
    cache_cluster_id: Optional[str] = field(default=None)
    cache_node_create_time: Optional[datetime] = field(default=None)
    cache_node_id: Optional[str] = field(default=None)
    cache_size: Optional[str] = field(default=None)
    node_group_configuration: Optional[NodeGroupConfiguration] = field(default=None)
    node_group_id: Optional[str] = field(default=None)
    snapshot_create_time: Optional[datetime] = field(default=None)
    
