from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import List,Optional
from . import *


@dataclass
class GroupDetail:
    r"""GroupDetail
    <p>Contains information about an IAM group, including all of the group's policies.</p> <p>This data type is used as a response element in the <a>GetAccountAuthorizationDetails</a> operation.</p>
    """
    
    arn: Optional[str] = field(default=None)
    attached_managed_policies: Optional[List[AttachedPolicy]] = field(default=None)
    create_date: Optional[datetime] = field(default=None)
    group_id: Optional[str] = field(default=None)
    group_name: Optional[str] = field(default=None)
    group_policy_list: Optional[List[PolicyDetail]] = field(default=None)
    path: Optional[str] = field(default=None)
    
