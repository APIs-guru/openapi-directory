from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class FilterActivity:
    r"""FilterActivity
    An activity that filters a message based on its attributes.
    """
    
    filter: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('filter') }})
    name: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    next: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('next') }})
    
