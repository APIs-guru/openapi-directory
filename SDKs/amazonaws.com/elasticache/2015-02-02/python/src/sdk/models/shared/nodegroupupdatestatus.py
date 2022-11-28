from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import List,Optional
from . import *


@dataclass
class NodeGroupUpdateStatus:
    r"""NodeGroupUpdateStatus
    The status of the service update on the node group 
    """
    
    node_group_id: Optional[str] = field(default=None)
    node_group_member_update_status: Optional[List[NodeGroupMemberUpdateStatus]] = field(default=None)
    
