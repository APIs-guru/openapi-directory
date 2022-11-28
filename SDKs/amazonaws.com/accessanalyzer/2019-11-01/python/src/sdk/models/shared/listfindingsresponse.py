from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class ListFindingsResponse:
    r"""ListFindingsResponse
    The response to the request.
    """
    
    findings: List[FindingSummary] = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('findings') }})
    next_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('nextToken') }})
    
