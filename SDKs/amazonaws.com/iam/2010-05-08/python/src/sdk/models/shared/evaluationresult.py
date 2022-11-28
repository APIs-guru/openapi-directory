from dataclasses import dataclass, field
from typing import List,Optional
from enum import Enum
from . import *


@dataclass
class EvaluationResult:
    r"""EvaluationResult
    <p>Contains the results of a simulation.</p> <p>This data type is used by the return parameter of <code> <a>SimulateCustomPolicy</a> </code> and <code> <a>SimulatePrincipalPolicy</a> </code>.</p>
    """
    
    eval_action_name: str = field()
    eval_decision: PolicyEvaluationDecisionTypeEnum = field()
    eval_decision_details: Optional[dict[str, PolicyEvaluationDecisionTypeEnum]] = field(default=None)
    eval_resource_name: Optional[str] = field(default=None)
    matched_statements: Optional[List[Statement]] = field(default=None)
    missing_context_values: Optional[List[str]] = field(default=None)
    organizations_decision_detail: Optional[OrganizationsDecisionDetail] = field(default=None)
    permissions_boundary_decision_detail: Optional[PermissionsBoundaryDecisionDetail] = field(default=None)
    resource_specific_results: Optional[List[ResourceSpecificResult]] = field(default=None)
    
