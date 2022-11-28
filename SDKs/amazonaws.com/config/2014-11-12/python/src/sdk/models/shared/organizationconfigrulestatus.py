from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class OrganizationConfigRuleStatus:
    r"""OrganizationConfigRuleStatus
    Returns the status for an organization config rule in an organization.
    """
    
    organization_config_rule_name: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('OrganizationConfigRuleName') }})
    organization_rule_status: OrganizationRuleStatusEnum = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('OrganizationRuleStatus') }})
    error_code: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ErrorCode') }})
    error_message: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ErrorMessage') }})
    last_update_time: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('LastUpdateTime'), 'encoder': utils.datetimeisoformat(True), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    
