from dataclasses import dataclass, field
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class Resource:
    r"""Resource
    Information about a resource.
    """
    
    id: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('Id') }})
    name: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('Name') }})
    resource_data_container: ResourceDataContainer = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('ResourceDataContainer') }})
    
