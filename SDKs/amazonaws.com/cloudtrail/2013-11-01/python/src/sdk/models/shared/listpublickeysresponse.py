from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class ListPublicKeysResponse:
    r"""ListPublicKeysResponse
    Returns the objects or data listed below if successful. Otherwise, returns an error.
    """
    
    next_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('NextToken') }})
    public_key_list: Optional[List[PublicKey]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('PublicKeyList') }})
    
