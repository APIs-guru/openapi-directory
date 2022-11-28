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
class OrganizationConformancePackStatus:
    r"""OrganizationConformancePackStatus
    Returns the status for an organization conformance pack in an organization.
    """
    
    organization_conformance_pack_name: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('OrganizationConformancePackName') }})
    status: OrganizationResourceStatusEnum = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('Status') }})
    error_code: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ErrorCode') }})
    error_message: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ErrorMessage') }})
    last_update_time: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('LastUpdateTime'), 'encoder': utils.datetimeisoformat(True), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    
