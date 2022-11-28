from dataclasses import dataclass, field
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class DeleteScalingPolicyInput:
    r"""DeleteScalingPolicyInput
    Represents the input for a request operation.
    """
    
    fleet_id: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('FleetId') }})
    name: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('Name') }})
    
