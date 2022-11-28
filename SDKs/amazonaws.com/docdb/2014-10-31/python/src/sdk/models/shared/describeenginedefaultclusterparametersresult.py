from dataclasses import dataclass, field
from typing import Optional
from . import *


@dataclass
class DescribeEngineDefaultClusterParametersResult:
    engine_defaults: Optional[EngineDefaults] = field(default=None)
    
