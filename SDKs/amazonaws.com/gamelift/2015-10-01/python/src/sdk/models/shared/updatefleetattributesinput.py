from dataclasses import dataclass, field
from typing import Enum,List,Optional
from dataclasses_json import dataclass_json
from . import protectionpolicy_enum
from . import resourcecreationlimitpolicy


@dataclass_json
@dataclass
class UpdateFleetAttributesInput:
    description: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Description' }})
    fleet_id: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'FleetId' }})
    metric_groups: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'MetricGroups' }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Name' }})
    new_game_session_protection_policy: Optional[protectionpolicy_enum.ProtectionPolicyEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'NewGameSessionProtectionPolicy' }})
    resource_creation_limit_policy: Optional[resourcecreationlimitpolicy.ResourceCreationLimitPolicy] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ResourceCreationLimitPolicy' }})
    
