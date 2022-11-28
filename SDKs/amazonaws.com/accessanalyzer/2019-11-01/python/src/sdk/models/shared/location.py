from dataclasses import dataclass, field
from typing import List
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class Location:
    r"""Location
    A location in a policy that is represented as a path through the JSON representation and a corresponding span.
    """
    
    path: List[PathElement] = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('path') }})
    span: Span = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('span') }})
    
