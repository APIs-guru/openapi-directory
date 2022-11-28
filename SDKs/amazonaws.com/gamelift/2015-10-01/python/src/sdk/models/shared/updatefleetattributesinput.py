from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import List,Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class UpdateFleetAttributesInput:
    r"""UpdateFleetAttributesInput
    Represents the input for a request operation.
    """
    
    fleet_id: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('FleetId') }})
    description: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Description') }})
    metric_groups: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('MetricGroups') }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Name') }})
    new_game_session_protection_policy: Optional[ProtectionPolicyEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('NewGameSessionProtectionPolicy') }})
    resource_creation_limit_policy: Optional[ResourceCreationLimitPolicy] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ResourceCreationLimitPolicy') }})
    
