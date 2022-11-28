from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class GetResourceConfigHistoryResponse:
    r"""GetResourceConfigHistoryResponse
    The output for the <a>GetResourceConfigHistory</a> action.
    """
    
    configuration_items: Optional[List[ConfigurationItem]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('configurationItems') }})
    next_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('nextToken') }})
    
