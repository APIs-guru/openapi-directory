from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import List,Optional
from . import *


@dataclass
class InstanceProfile:
    r"""InstanceProfile
    <p>Contains information about an instance profile.</p> <p>This data type is used as a response element in the following operations:</p> <ul> <li> <p> <a>CreateInstanceProfile</a> </p> </li> <li> <p> <a>GetInstanceProfile</a> </p> </li> <li> <p> <a>ListInstanceProfiles</a> </p> </li> <li> <p> <a>ListInstanceProfilesForRole</a> </p> </li> </ul>
    """
    
    arn: str = field()
    create_date: datetime = field()
    instance_profile_id: str = field()
    instance_profile_name: str = field()
    path: str = field()
    roles: List[Role] = field()
    tags: Optional[List[Tag]] = field(default=None)
    
