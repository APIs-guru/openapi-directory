from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import List,Optional
from . import *


@dataclass
class Role:
    r"""Role
    Contains information about an IAM role. This structure is returned as a response element in several API operations that interact with roles.
    """
    
    arn: str = field()
    create_date: datetime = field()
    path: str = field()
    role_id: str = field()
    role_name: str = field()
    assume_role_policy_document: Optional[str] = field(default=None)
    description: Optional[str] = field(default=None)
    max_session_duration: Optional[int] = field(default=None)
    permissions_boundary: Optional[AttachedPermissionsBoundary] = field(default=None)
    role_last_used: Optional[RoleLastUsed] = field(default=None)
    tags: Optional[List[Tag]] = field(default=None)
    
