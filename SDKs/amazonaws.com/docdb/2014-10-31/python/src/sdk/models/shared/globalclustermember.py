from dataclasses import dataclass, field
from typing import List,Optional


@dataclass
class GlobalClusterMember:
    r"""GlobalClusterMember
    A data structure with information about any primary and secondary clusters associated with an Amazon DocumentDB global clusters. 
    """
    
    db_cluster_arn: Optional[str] = field(default=None)
    is_writer: Optional[bool] = field(default=None)
    readers: Optional[List[str]] = field(default=None)
    
