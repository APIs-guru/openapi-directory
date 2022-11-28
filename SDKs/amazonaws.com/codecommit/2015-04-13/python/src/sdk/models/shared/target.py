from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class Target:
    r"""Target
    Returns information about a target for a pull request.
    """
    
    repository_name: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('repositoryName') }})
    source_reference: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('sourceReference') }})
    destination_reference: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('destinationReference') }})
    
