from dataclasses import dataclass, field
from typing import List,Optional
from . import *


@dataclass
class ModifyTargetGroupAttributesOutput:
    attributes: Optional[List[TargetGroupAttribute]] = field(default=None)
    
