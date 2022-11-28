from dataclasses import dataclass, field
from typing import Optional


@dataclass
class DbClusterParameterGroup:
    r"""DbClusterParameterGroup
    Detailed information about a cluster parameter group. 
    """
    
    db_cluster_parameter_group_arn: Optional[str] = field(default=None)
    db_cluster_parameter_group_name: Optional[str] = field(default=None)
    db_parameter_group_family: Optional[str] = field(default=None)
    description: Optional[str] = field(default=None)
    
