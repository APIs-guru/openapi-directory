from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class ListGitHubAccountTokenNamesOutput:
    r"""ListGitHubAccountTokenNamesOutput
    Represents the output of a <code>ListGitHubAccountTokenNames</code> operation.
    """
    
    next_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('nextToken') }})
    token_name_list: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('tokenNameList') }})
    
