from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import compliancebyconfigrule


@dataclass_json
@dataclass
class DescribeComplianceByConfigRuleResponse:
    compliance_by_config_rules: Optional[List[compliancebyconfigrule.ComplianceByConfigRule]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ComplianceByConfigRules' }})
    next_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'NextToken' }})
    
