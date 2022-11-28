from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class CreateAPICacheResponse:
    r"""CreateAPICacheResponse
    Represents the output of a <code>CreateApiCache</code> operation.
    """
    
    api_cache: Optional[APICache] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('apiCache') }})
    
