from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class PutOrganizationConfigRuleRequest:
    organization_config_rule_name: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('OrganizationConfigRuleName') }})
    excluded_accounts: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ExcludedAccounts') }})
    organization_custom_rule_metadata: Optional[OrganizationCustomRuleMetadata] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('OrganizationCustomRuleMetadata') }})
    organization_managed_rule_metadata: Optional[OrganizationManagedRuleMetadata] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('OrganizationManagedRuleMetadata') }})
    
