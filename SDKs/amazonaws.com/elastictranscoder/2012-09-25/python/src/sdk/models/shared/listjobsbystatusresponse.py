from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class ListJobsByStatusResponse:
    r"""ListJobsByStatusResponse
     The <code>ListJobsByStatusResponse</code> structure. 
    """
    
    jobs: Optional[List[Job]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Jobs') }})
    next_page_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('NextPageToken') }})
    
