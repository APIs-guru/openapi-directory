from dataclasses import dataclass, field
from typing import List,Optional
from . import *


@dataclass
class EnterStandbyAnswer:
    activities: Optional[List[Activity]] = field(default=None)
    
