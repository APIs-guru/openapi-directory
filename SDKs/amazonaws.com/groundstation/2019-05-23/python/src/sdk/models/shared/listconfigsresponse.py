from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class ListConfigsResponse:
    r"""ListConfigsResponse
    <p/>
    """
    
    config_list: Optional[List[ConfigListItem]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('configList') }})
    next_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('nextToken') }})
    
