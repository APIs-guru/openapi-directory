from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import compliance


@dataclass_json
@dataclass
class AggregateComplianceByConfigRule:
    account_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'AccountId' }})
    aws_region: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'AwsRegion' }})
    compliance: Optional[compliance.Compliance] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Compliance' }})
    config_rule_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ConfigRuleName' }})
    
