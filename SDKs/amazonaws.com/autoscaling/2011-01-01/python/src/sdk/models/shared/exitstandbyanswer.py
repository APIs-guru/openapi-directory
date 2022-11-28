from dataclasses import dataclass, field
from typing import List,Optional
from . import *


@dataclass
class ExitStandbyAnswer:
    activities: Optional[List[Activity]] = field(default=None)
    
