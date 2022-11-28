from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import List,Optional
from . import *


@dataclass
class ManagedPolicyDetail:
    r"""ManagedPolicyDetail
    <p>Contains information about a managed policy, including the policy's ARN, versions, and the number of principal entities (users, groups, and roles) that the policy is attached to.</p> <p>This data type is used as a response element in the <a>GetAccountAuthorizationDetails</a> operation.</p> <p>For more information about managed policies, see <a href=\"https://docs.aws.amazon.com/IAM/latest/UserGuide/policies-managed-vs-inline.html\">Managed policies and inline policies</a> in the <i>IAM User Guide</i>. </p>
    """
    
    arn: Optional[str] = field(default=None)
    attachment_count: Optional[int] = field(default=None)
    create_date: Optional[datetime] = field(default=None)
    default_version_id: Optional[str] = field(default=None)
    description: Optional[str] = field(default=None)
    is_attachable: Optional[bool] = field(default=None)
    path: Optional[str] = field(default=None)
    permissions_boundary_usage_count: Optional[int] = field(default=None)
    policy_id: Optional[str] = field(default=None)
    policy_name: Optional[str] = field(default=None)
    policy_version_list: Optional[List[PolicyVersion]] = field(default=None)
    update_date: Optional[datetime] = field(default=None)
    
