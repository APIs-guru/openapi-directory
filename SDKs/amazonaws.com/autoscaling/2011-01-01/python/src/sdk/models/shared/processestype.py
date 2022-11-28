from dataclasses import dataclass, field
from typing import List,Optional
from . import *


@dataclass
class ProcessesType:
    processes: Optional[List[ProcessType]] = field(default=None)
    
