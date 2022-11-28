from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class MathActivity:
    r"""MathActivity
    An activity that computes an arithmetic expression using the message's attributes.
    """
    
    attribute: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('attribute') }})
    math: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('math') }})
    name: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    next: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('next') }})
    
