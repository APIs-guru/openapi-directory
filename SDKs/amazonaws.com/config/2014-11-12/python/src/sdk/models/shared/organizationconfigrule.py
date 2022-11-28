from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class OrganizationConfigRule:
    r"""OrganizationConfigRule
    An organization config rule that has information about config rules that Config creates in member accounts.
    """
    
    organization_config_rule_arn: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('OrganizationConfigRuleArn') }})
    organization_config_rule_name: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('OrganizationConfigRuleName') }})
    excluded_accounts: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ExcludedAccounts') }})
    last_update_time: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('LastUpdateTime'), 'encoder': utils.datetimeisoformat(True), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    organization_custom_rule_metadata: Optional[OrganizationCustomRuleMetadata] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('OrganizationCustomRuleMetadata') }})
    organization_managed_rule_metadata: Optional[OrganizationManagedRuleMetadata] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('OrganizationManagedRuleMetadata') }})
    
