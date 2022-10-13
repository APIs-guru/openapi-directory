from dataclasses import dataclass, field
from typing import Enum,List,Optional
from dataclasses_json import dataclass_json
from . import compliancetype_enum


@dataclass_json
@dataclass
class GetComplianceDetailsByConfigRuleRequest:
    compliance_types: Optional[List[compliancetype_enum.ComplianceTypeEnum]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ComplianceTypes' }})
    config_rule_name: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ConfigRuleName' }})
    limit: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Limit' }})
    next_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'NextToken' }})
    
