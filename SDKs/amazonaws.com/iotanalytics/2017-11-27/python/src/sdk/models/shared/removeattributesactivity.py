from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class RemoveAttributesActivity:
    r"""RemoveAttributesActivity
    An activity that removes attributes from a message.
    """
    
    attributes: List[str] = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('attributes') }})
    name: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    next: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('next') }})
    
