from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import aggregatecompliancebyconfigrule


@dataclass_json
@dataclass
class DescribeAggregateComplianceByConfigRulesResponse:
    aggregate_compliance_by_config_rules: Optional[List[aggregatecompliancebyconfigrule.AggregateComplianceByConfigRule]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'AggregateComplianceByConfigRules' }})
    next_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'NextToken' }})
    
