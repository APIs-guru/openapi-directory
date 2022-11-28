from dataclasses import dataclass, field
from typing import List,Optional
from . import *


@dataclass
class ActivitiesType:
    activities: List[Activity] = field()
    next_token: Optional[str] = field(default=None)
    
