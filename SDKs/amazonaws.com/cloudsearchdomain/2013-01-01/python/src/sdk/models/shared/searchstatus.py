from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class SearchStatus:
    r"""SearchStatus
    Contains the resource id (<code>rid</code>) and the time it took to process the request (<code>timems</code>).
    """
    
    rid: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('rid') }})
    timems: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('timems') }})
    
