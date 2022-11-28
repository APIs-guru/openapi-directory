from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import List,Optional


@dataclass
class UserGroupsUpdateStatus:
    r"""UserGroupsUpdateStatus
    The status of the user group update.
    """
    
    user_group_ids_to_add: Optional[List[str]] = field(default=None)
    user_group_ids_to_remove: Optional[List[str]] = field(default=None)
    
