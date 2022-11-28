from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import List,Optional


@dataclass
class UserGroupPendingChanges:
    r"""UserGroupPendingChanges
    Returns the updates being applied to the user group.
    """
    
    user_ids_to_add: Optional[List[str]] = field(default=None)
    user_ids_to_remove: Optional[List[str]] = field(default=None)
    
