from dataclasses import dataclass, field
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class ActionTypeArtifactDetails:
    r"""ActionTypeArtifactDetails
    Information about parameters for artifacts associated with the action type, such as the minimum and maximum artifacts allowed.
    """
    
    maximum_count: int = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('maximumCount') }})
    minimum_count: int = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('minimumCount') }})
    
