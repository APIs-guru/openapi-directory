from dataclasses import dataclass, field
from typing import Enum,List,Optional
from dataclasses_json import dataclass_json
from . import compliancetype_enum


@dataclass_json
@dataclass
class DescribeComplianceByConfigRuleRequest:
    compliance_types: Optional[List[compliancetype_enum.ComplianceTypeEnum]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ComplianceTypes' }})
    config_rule_names: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ConfigRuleNames' }})
    next_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'NextToken' }})
    
