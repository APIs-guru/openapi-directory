from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import contactdata


@dataclass_json
@dataclass
class ListContactsResponse:
    contact_list: Optional[List[contactdata.ContactData]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'contactList' }})
    next_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'nextToken' }})
    
