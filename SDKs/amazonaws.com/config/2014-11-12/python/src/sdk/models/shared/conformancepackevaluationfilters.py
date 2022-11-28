from dataclasses import dataclass, field
from typing import List,Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class ConformancePackEvaluationFilters:
    r"""ConformancePackEvaluationFilters
    Filters a conformance pack by Config rule names, compliance types, Amazon Web Services resource types, and resource IDs.
    """
    
    compliance_type: Optional[ConformancePackComplianceTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ComplianceType') }})
    config_rule_names: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ConfigRuleNames') }})
    resource_ids: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ResourceIds') }})
    resource_type: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ResourceType') }})
    
