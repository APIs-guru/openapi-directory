from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import conformancepackrulecompliance


@dataclass_json
@dataclass
class DescribeConformancePackComplianceResponse:
    conformance_pack_name: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ConformancePackName' }})
    conformance_pack_rule_compliance_list: List[conformancepackrulecompliance.ConformancePackRuleCompliance] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ConformancePackRuleComplianceList' }})
    next_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'NextToken' }})
    
