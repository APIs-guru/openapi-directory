from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class SuggestResponse:
    r"""SuggestResponse
    Contains the response to a <code>Suggest</code> request.
    """
    
    status: Optional[SuggestStatus] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('status') }})
    suggest: Optional[SuggestModel] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('suggest') }})
    
