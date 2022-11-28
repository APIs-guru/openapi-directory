from dataclasses import dataclass, field
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class Substring:
    r"""Substring
    A reference to a substring of a literal string in a JSON document.
    """
    
    length: int = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('length') }})
    start: int = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('start') }})
    
