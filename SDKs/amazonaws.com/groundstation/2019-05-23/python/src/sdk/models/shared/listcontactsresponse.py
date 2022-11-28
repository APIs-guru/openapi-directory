from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class ListContactsResponse:
    r"""ListContactsResponse
    <p/>
    """
    
    contact_list: Optional[List[ContactData]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('contactList') }})
    next_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('nextToken') }})
    
