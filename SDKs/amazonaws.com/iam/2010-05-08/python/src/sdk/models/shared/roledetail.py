from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import List,Optional
from . import *


@dataclass
class RoleDetail:
    r"""RoleDetail
    <p>Contains information about an IAM role, including all of the role's policies.</p> <p>This data type is used as a response element in the <a>GetAccountAuthorizationDetails</a> operation.</p>
    """
    
    arn: Optional[str] = field(default=None)
    assume_role_policy_document: Optional[str] = field(default=None)
    attached_managed_policies: Optional[List[AttachedPolicy]] = field(default=None)
    create_date: Optional[datetime] = field(default=None)
    instance_profile_list: Optional[List[InstanceProfile]] = field(default=None)
    path: Optional[str] = field(default=None)
    permissions_boundary: Optional[AttachedPermissionsBoundary] = field(default=None)
    role_id: Optional[str] = field(default=None)
    role_last_used: Optional[RoleLastUsed] = field(default=None)
    role_name: Optional[str] = field(default=None)
    role_policy_list: Optional[List[PolicyDetail]] = field(default=None)
    tags: Optional[List[Tag]] = field(default=None)
    
