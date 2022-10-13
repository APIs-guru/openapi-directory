from dataclasses import dataclass, field
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class DeleteOrganizationConfigRuleRequest:
    organization_config_rule_name: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'OrganizationConfigRuleName' }})
    
