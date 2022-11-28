from dataclasses import dataclass, field
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class StopGameSessionPlacementInput:
    r"""StopGameSessionPlacementInput
    Represents the input for a request operation.
    """
    
    placement_id: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('PlacementId') }})
    
