from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import List,Optional
from . import *


@dataclass
class User:
    r"""User
    <p>Contains information about an IAM user entity.</p> <p>This data type is used as a response element in the following operations:</p> <ul> <li> <p> <a>CreateUser</a> </p> </li> <li> <p> <a>GetUser</a> </p> </li> <li> <p> <a>ListUsers</a> </p> </li> </ul>
    """
    
    arn: str = field()
    create_date: datetime = field()
    path: str = field()
    user_id: str = field()
    user_name: str = field()
    password_last_used: Optional[datetime] = field(default=None)
    permissions_boundary: Optional[AttachedPermissionsBoundary] = field(default=None)
    tags: Optional[List[Tag]] = field(default=None)
    
