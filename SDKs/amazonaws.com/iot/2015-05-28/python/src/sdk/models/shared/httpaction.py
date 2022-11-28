from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class HTTPAction:
    r"""HTTPAction
    Send data to an HTTPS endpoint.
    """
    
    url: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('url') }})
    auth: Optional[HTTPAuthorization] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('auth') }})
    confirmation_url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('confirmationUrl') }})
    headers: Optional[List[HTTPActionHeader]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('headers') }})
    
