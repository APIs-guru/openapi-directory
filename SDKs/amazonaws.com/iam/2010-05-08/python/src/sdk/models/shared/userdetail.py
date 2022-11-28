from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import List,Optional
from . import *


@dataclass
class UserDetail:
    r"""UserDetail
    <p>Contains information about an IAM user, including all the user's policies and all the IAM groups the user is in.</p> <p>This data type is used as a response element in the <a>GetAccountAuthorizationDetails</a> operation.</p>
    """
    
    arn: Optional[str] = field(default=None)
    attached_managed_policies: Optional[List[AttachedPolicy]] = field(default=None)
    create_date: Optional[datetime] = field(default=None)
    group_list: Optional[List[str]] = field(default=None)
    path: Optional[str] = field(default=None)
    permissions_boundary: Optional[AttachedPermissionsBoundary] = field(default=None)
    tags: Optional[List[Tag]] = field(default=None)
    user_id: Optional[str] = field(default=None)
    user_name: Optional[str] = field(default=None)
    user_policy_list: Optional[List[PolicyDetail]] = field(default=None)
    
