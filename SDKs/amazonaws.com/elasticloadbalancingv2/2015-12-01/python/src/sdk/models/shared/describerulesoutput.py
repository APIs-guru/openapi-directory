from dataclasses import dataclass, field
from typing import List,Optional
from . import *


@dataclass
class DescribeRulesOutput:
    next_marker: Optional[str] = field(default=None)
    rules: Optional[List[Rule]] = field(default=None)
    
