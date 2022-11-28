from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class ListOutgoingTypedLinksResponse:
    next_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('NextToken') }})
    typed_link_specifiers: Optional[List[TypedLinkSpecifier]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('TypedLinkSpecifiers') }})
    
