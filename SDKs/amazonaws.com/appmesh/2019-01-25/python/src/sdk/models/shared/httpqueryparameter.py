from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class HTTPQueryParameter:
    r"""HTTPQueryParameter
    An object that represents the query parameter in the request.
    """
    
    name: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    match: Optional[QueryParameterMatch] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('match') }})
    
