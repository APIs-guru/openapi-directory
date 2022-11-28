from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class ListPresetsResponse:
    r"""ListPresetsResponse
    The <code>ListPresetsResponse</code> structure.
    """
    
    next_page_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('NextPageToken') }})
    presets: Optional[List[Preset]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Presets') }})
    
