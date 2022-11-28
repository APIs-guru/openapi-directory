from dataclasses import dataclass, field
from typing import Optional


@dataclass
class DbClusterMember:
    r"""DbClusterMember
    Contains information about an instance that is part of a cluster.
    """
    
    db_cluster_parameter_group_status: Optional[str] = field(default=None)
    db_instance_identifier: Optional[str] = field(default=None)
    is_cluster_writer: Optional[bool] = field(default=None)
    promotion_tier: Optional[int] = field(default=None)
    
