from dataclasses import dataclass, field
from typing import List,Optional
from . import *


@dataclass
class GlobalCluster:
    r"""GlobalCluster
    A data type representing an Amazon DocumentDB global cluster.
    """
    
    database_name: Optional[str] = field(default=None)
    deletion_protection: Optional[bool] = field(default=None)
    engine: Optional[str] = field(default=None)
    engine_version: Optional[str] = field(default=None)
    global_cluster_arn: Optional[str] = field(default=None)
    global_cluster_identifier: Optional[str] = field(default=None)
    global_cluster_members: Optional[List[GlobalClusterMember]] = field(default=None)
    global_cluster_resource_id: Optional[str] = field(default=None)
    status: Optional[str] = field(default=None)
    storage_encrypted: Optional[bool] = field(default=None)
    
