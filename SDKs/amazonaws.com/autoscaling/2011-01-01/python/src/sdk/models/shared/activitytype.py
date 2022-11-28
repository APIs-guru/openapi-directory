from dataclasses import dataclass, field
from typing import Optional
from . import *


@dataclass
class ActivityType:
    activity: Optional[Activity] = field(default=None)
    
