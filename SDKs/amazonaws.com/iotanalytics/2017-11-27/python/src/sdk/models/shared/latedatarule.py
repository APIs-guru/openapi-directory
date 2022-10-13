from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import latedataruleconfiguration


@dataclass_json
@dataclass
class LateDataRule:
    rule_configuration: latedataruleconfiguration.LateDataRuleConfiguration = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ruleConfiguration' }})
    rule_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ruleName' }})
    
