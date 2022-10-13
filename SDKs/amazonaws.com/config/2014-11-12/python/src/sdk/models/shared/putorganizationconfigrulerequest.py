from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import organizationcustomrulemetadata
from . import organizationmanagedrulemetadata


@dataclass_json
@dataclass
class PutOrganizationConfigRuleRequest:
    excluded_accounts: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ExcludedAccounts' }})
    organization_config_rule_name: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'OrganizationConfigRuleName' }})
    organization_custom_rule_metadata: Optional[organizationcustomrulemetadata.OrganizationCustomRuleMetadata] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'OrganizationCustomRuleMetadata' }})
    organization_managed_rule_metadata: Optional[organizationmanagedrulemetadata.OrganizationManagedRuleMetadata] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'OrganizationManagedRuleMetadata' }})
    
