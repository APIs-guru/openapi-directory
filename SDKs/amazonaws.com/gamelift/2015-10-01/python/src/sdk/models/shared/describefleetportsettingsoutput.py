from dataclasses import dataclass, field
from typing import Enum,List,Optional
from dataclasses_json import dataclass_json
from . import ippermission
from . import locationupdatestatus_enum


@dataclass_json
@dataclass
class DescribeFleetPortSettingsOutput:
    fleet_arn: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'FleetArn' }})
    fleet_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'FleetId' }})
    inbound_permissions: Optional[List[ippermission.IPPermission]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'InboundPermissions' }})
    location: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Location' }})
    update_status: Optional[locationupdatestatus_enum.LocationUpdateStatusEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'UpdateStatus' }})
    
