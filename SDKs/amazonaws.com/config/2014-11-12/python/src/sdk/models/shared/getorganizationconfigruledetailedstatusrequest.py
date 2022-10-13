from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import statusdetailfilters


@dataclass_json
@dataclass
class GetOrganizationConfigRuleDetailedStatusRequest:
    filters: Optional[statusdetailfilters.StatusDetailFilters] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Filters' }})
    limit: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Limit' }})
    next_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'NextToken' }})
    organization_config_rule_name: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'OrganizationConfigRuleName' }})
    
