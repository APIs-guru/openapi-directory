from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class ListArchiveRulesResponse:
    r"""ListArchiveRulesResponse
    The response to the request.
    """
    
    archive_rules: List[ArchiveRuleSummary] = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('archiveRules') }})
    next_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('nextToken') }})
    
