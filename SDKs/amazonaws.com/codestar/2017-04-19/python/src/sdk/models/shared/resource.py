from dataclasses import dataclass, field
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class Resource:
    r"""Resource
    Information about a resource for a project.
    """
    
    id: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    
