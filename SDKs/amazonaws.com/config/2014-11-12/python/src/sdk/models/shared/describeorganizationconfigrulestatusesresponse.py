from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import organizationconfigrulestatus


@dataclass_json
@dataclass
class DescribeOrganizationConfigRuleStatusesResponse:
    next_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'NextToken' }})
    organization_config_rule_statuses: Optional[List[organizationconfigrulestatus.OrganizationConfigRuleStatus]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'OrganizationConfigRuleStatuses' }})
    
