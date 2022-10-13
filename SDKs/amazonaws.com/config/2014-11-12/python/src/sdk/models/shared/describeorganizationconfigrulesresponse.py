from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import organizationconfigrule


@dataclass_json
@dataclass
class DescribeOrganizationConfigRulesResponse:
    next_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'NextToken' }})
    organization_config_rules: Optional[List[organizationconfigrule.OrganizationConfigRule]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'OrganizationConfigRules' }})
    
