from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import List,Optional
from . import *


@dataclass
class Policy:
    r"""Policy
    <p>Contains information about a managed policy.</p> <p>This data type is used as a response element in the <a>CreatePolicy</a>, <a>GetPolicy</a>, and <a>ListPolicies</a> operations. </p> <p>For more information about managed policies, refer to <a href=\"https://docs.aws.amazon.com/IAM/latest/UserGuide/policies-managed-vs-inline.html\">Managed policies and inline policies</a> in the <i>IAM User Guide</i>. </p>
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
    tags: Optional[List[Tag]] = field(default=None)
    update_date: Optional[datetime] = field(default=None)
    
