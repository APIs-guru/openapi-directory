from dataclasses import dataclass, field
from typing import List,Optional


@dataclass
class NodeGroupConfiguration:
    r"""NodeGroupConfiguration
    Node group (shard) configuration options. Each node group (shard) configuration has the following: <code>Slots</code>, <code>PrimaryAvailabilityZone</code>, <code>ReplicaAvailabilityZones</code>, <code>ReplicaCount</code>.
    """
    
    node_group_id: Optional[str] = field(default=None)
    primary_availability_zone: Optional[str] = field(default=None)
    primary_outpost_arn: Optional[str] = field(default=None)
    replica_availability_zones: Optional[List[str]] = field(default=None)
    replica_count: Optional[int] = field(default=None)
    replica_outpost_arns: Optional[List[str]] = field(default=None)
    slots: Optional[str] = field(default=None)
    
