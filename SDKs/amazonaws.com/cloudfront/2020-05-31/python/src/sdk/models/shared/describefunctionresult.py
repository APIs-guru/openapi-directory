from dataclasses import dataclass, field
from typing import Optional
from . import *


@dataclass
class DescribeFunctionResult:
    function_summary: Optional[FunctionSummary] = field(default=None)
    
