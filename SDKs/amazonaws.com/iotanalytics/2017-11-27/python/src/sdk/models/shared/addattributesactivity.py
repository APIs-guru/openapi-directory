from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class AddAttributesActivity:
    r"""AddAttributesActivity
    An activity that adds other attributes based on existing attributes in the message.
    """
    
    attributes: dict[str, str] = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('attributes') }})
    name: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    next: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('next') }})
    
