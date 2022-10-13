from dataclasses import dataclass, field
from datetime import datetime
from marshmallow import fields
import dateutil.parser
from typing import Enum,Optional
from dataclasses_json import dataclass_json
from . import organizationrulestatus_enum


@dataclass_json
@dataclass
class OrganizationConfigRuleStatus:
    error_code: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ErrorCode' }})
    error_message: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ErrorMessage' }})
    last_update_time: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'LastUpdateTime', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    organization_config_rule_name: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'OrganizationConfigRuleName' }})
    organization_rule_status: organizationrulestatus_enum.OrganizationRuleStatusEnum = field(default=None, metadata={'dataclasses_json': { 'field_name': 'OrganizationRuleStatus' }})
    
