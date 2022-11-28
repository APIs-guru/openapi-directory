from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class Hits:
    r"""Hits
    The collection of documents that match the search request.
    """
    
    cursor: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('cursor') }})
    found: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('found') }})
    hit: Optional[List[Hit]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('hit') }})
    start: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('start') }})
    
