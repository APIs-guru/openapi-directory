from dataclasses import dataclass, field
from typing import List,Optional
from . import *


@dataclass
class DescribeFlowLogsResult:
    flow_logs: Optional[List[FlowLog]] = field(default=None)
    next_token: Optional[str] = field(default=None)
    
