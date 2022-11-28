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
class UpdateFleetPortSettingsInput:
    r"""UpdateFleetPortSettingsInput
    Represents the input for a request operation.
    """
    
    fleet_id: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('FleetId') }})
    inbound_permission_authorizations: Optional[List[IPPermission]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('InboundPermissionAuthorizations') }})
    inbound_permission_revocations: Optional[List[IPPermission]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('InboundPermissionRevocations') }})
    
