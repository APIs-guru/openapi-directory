from dataclasses import dataclass, field
from typing import Enum,Optional
from dataclasses_json import dataclass_json
from . import compliancetype_enum


@dataclass_json
@dataclass
class ConfigRuleComplianceFilters:
    account_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'AccountId' }})
    aws_region: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'AwsRegion' }})
    compliance_type: Optional[compliancetype_enum.ComplianceTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ComplianceType' }})
    config_rule_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ConfigRuleName' }})
    
