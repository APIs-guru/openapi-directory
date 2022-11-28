from dataclasses import dataclass, field
from typing import List,Optional
from . import *


@dataclass
class ModifyRuleOutput:
    rules: Optional[List[Rule]] = field(default=None)
    
