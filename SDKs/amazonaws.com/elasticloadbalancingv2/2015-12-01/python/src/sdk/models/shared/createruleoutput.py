from dataclasses import dataclass, field
from typing import List,Optional
from . import *


@dataclass
class CreateRuleOutput:
    rules: Optional[List[Rule]] = field(default=None)
    
