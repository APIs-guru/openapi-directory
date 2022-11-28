from dataclasses import dataclass, field
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class ArtifactDetails:
    r"""ArtifactDetails
    Returns information about the details of an artifact.
    """
    
    maximum_count: int = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('maximumCount') }})
    minimum_count: int = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('minimumCount') }})
    
