from dataclasses import dataclass, field
from typing import List,Optional
from . import *


@dataclass
class ModifyListenerOutput:
    listeners: Optional[List[Listener]] = field(default=None)
    
