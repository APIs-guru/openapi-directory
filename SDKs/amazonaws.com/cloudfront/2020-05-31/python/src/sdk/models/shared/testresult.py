from dataclasses import dataclass, field
from typing import List,Optional
from . import *


@dataclass
class TestResult:
    r"""TestResult
    Contains the result of testing a CloudFront function with <code>TestFunction</code>.
    """
    
    compute_utilization: Optional[str] = field(default=None)
    function_error_message: Optional[str] = field(default=None)
    function_execution_logs: Optional[List[str]] = field(default=None)
    function_output: Optional[str] = field(default=None)
    function_summary: Optional[FunctionSummary] = field(default=None)
    
