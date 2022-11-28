from dataclasses import dataclass, field
from typing import List,Optional
from . import *


@dataclass
class CreateFlowLogsResult:
    client_token: Optional[str] = field(default=None)
    flow_log_ids: Optional[List[str]] = field(default=None)
    unsuccessful: Optional[List[UnsuccessfulItem]] = field(default=None)
    
