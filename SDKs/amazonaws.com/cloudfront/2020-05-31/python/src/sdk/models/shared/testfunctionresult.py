from dataclasses import dataclass, field
from typing import Optional
from . import *


@dataclass
class TestFunctionResult:
    test_result: Optional[TestResult] = field(default=None)
    
