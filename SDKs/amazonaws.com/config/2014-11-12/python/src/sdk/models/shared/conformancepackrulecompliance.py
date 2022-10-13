from dataclasses import dataclass, field
from typing import Enum,List,Optional
from dataclasses_json import dataclass_json
from . import conformancepackcompliancetype_enum


@dataclass_json
@dataclass
class ConformancePackRuleCompliance:
    compliance_type: Optional[conformancepackcompliancetype_enum.ConformancePackComplianceTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ComplianceType' }})
    config_rule_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ConfigRuleName' }})
    controls: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Controls' }})
    
