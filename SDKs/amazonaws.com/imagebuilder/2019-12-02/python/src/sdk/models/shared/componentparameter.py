from dataclasses import dataclass, field
from typing import List
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class ComponentParameter:
    r"""ComponentParameter
    Contains a key/value pair that sets the named component parameter.
    """
    
    name: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    value: List[str] = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('value') }})
    
