from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import compliance


@dataclass_json
@dataclass
class ComplianceByConfigRule:
    compliance: Optional[compliance.Compliance] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Compliance' }})
    config_rule_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ConfigRuleName' }})
    
