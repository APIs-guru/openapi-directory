from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import ippermission
from . import ippermission


@dataclass_json
@dataclass
class UpdateFleetPortSettingsInput:
    fleet_id: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'FleetId' }})
    inbound_permission_authorizations: Optional[List[ippermission.IPPermission]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'InboundPermissionAuthorizations' }})
    inbound_permission_revocations: Optional[List[ippermission.IPPermission]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'InboundPermissionRevocations' }})
    
