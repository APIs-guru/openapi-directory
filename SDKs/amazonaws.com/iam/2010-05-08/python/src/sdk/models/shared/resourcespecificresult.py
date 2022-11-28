from dataclasses import dataclass, field
from typing import List,Optional
from enum import Enum
from . import *


@dataclass
class ResourceSpecificResult:
    r"""ResourceSpecificResult
    <p>Contains the result of the simulation of a single API operation call on a single resource.</p> <p>This data type is used by a member of the <a>EvaluationResult</a> data type.</p>
    """
    
    eval_resource_decision: PolicyEvaluationDecisionTypeEnum = field()
    eval_resource_name: str = field()
    eval_decision_details: Optional[dict[str, PolicyEvaluationDecisionTypeEnum]] = field(default=None)
    matched_statements: Optional[List[Statement]] = field(default=None)
    missing_context_values: Optional[List[str]] = field(default=None)
    permissions_boundary_decision_detail: Optional[PermissionsBoundaryDecisionDetail] = field(default=None)
    
