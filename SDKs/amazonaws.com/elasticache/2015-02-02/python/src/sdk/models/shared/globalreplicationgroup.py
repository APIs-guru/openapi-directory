from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import List,Optional
from . import *


@dataclass
class GlobalReplicationGroup:
    r"""GlobalReplicationGroup
    <p>Consists of a primary cluster that accepts writes and an associated secondary cluster that resides in a different Amazon region. The secondary cluster accepts only reads. The primary cluster automatically replicates updates to the secondary cluster.</p> <ul> <li> <p>The <b>GlobalReplicationGroupIdSuffix</b> represents the name of the Global datastore, which is what you use to associate a secondary cluster.</p> </li> </ul>
    """
    
    arn: Optional[str] = field(default=None)
    at_rest_encryption_enabled: Optional[bool] = field(default=None)
    auth_token_enabled: Optional[bool] = field(default=None)
    cache_node_type: Optional[str] = field(default=None)
    cluster_enabled: Optional[bool] = field(default=None)
    engine: Optional[str] = field(default=None)
    engine_version: Optional[str] = field(default=None)
    global_node_groups: Optional[List[GlobalNodeGroup]] = field(default=None)
    global_replication_group_description: Optional[str] = field(default=None)
    global_replication_group_id: Optional[str] = field(default=None)
    members: Optional[List[GlobalReplicationGroupMember]] = field(default=None)
    status: Optional[str] = field(default=None)
    transit_encryption_enabled: Optional[bool] = field(default=None)
    
