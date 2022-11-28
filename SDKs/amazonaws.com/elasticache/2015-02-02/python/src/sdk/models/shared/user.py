from dataclasses import dataclass, field
from typing import List,Optional
from . import *


@dataclass
class User:
    arn: Optional[str] = field(default=None)
    access_string: Optional[str] = field(default=None)
    authentication: Optional[Authentication] = field(default=None)
    engine: Optional[str] = field(default=None)
    status: Optional[str] = field(default=None)
    user_group_ids: Optional[List[str]] = field(default=None)
    user_id: Optional[str] = field(default=None)
    user_name: Optional[str] = field(default=None)
    
