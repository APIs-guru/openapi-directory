from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class DeleteRemediationConfigurationRequest:
    config_rule_name: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ConfigRuleName' }})
    resource_type: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ResourceType' }})
    
