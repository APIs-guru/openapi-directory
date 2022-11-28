from dataclasses import dataclass, field
from typing import List,Optional
from . import *


@dataclass
class SimulatePolicyResponse:
    r"""SimulatePolicyResponse
    Contains the response to a successful <a>SimulatePrincipalPolicy</a> or <a>SimulateCustomPolicy</a> request.
    """
    
    evaluation_results: Optional[List[EvaluationResult]] = field(default=None)
    is_truncated: Optional[bool] = field(default=None)
    marker: Optional[str] = field(default=None)
    
