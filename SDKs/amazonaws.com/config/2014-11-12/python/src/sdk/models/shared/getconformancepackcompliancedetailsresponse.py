from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class GetConformancePackComplianceDetailsResponse:
    conformance_pack_name: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('ConformancePackName') }})
    conformance_pack_rule_evaluation_results: Optional[List[ConformancePackEvaluationResult]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ConformancePackRuleEvaluationResults') }})
    next_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('NextToken') }})
    
