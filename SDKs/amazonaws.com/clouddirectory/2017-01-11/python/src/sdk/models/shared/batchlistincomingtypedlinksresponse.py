from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class BatchListIncomingTypedLinksResponse:
    r"""BatchListIncomingTypedLinksResponse
    Represents the output of a <a>ListIncomingTypedLinks</a> response operation.
    """
    
    link_specifiers: Optional[List[TypedLinkSpecifier]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('LinkSpecifiers') }})
    next_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('NextToken') }})
    
