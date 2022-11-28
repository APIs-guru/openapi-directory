from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class SuggestModel:
    r"""SuggestModel
    Container for the suggestion information returned in a <code>SuggestResponse</code>.
    """
    
    found: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('found') }})
    query: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('query') }})
    suggestions: Optional[List[SuggestionMatch]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('suggestions') }})
    
