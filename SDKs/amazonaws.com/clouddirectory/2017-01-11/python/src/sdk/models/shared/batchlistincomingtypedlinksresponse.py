from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import typedlinkspecifier


@dataclass_json
@dataclass
class BatchListIncomingTypedLinksResponse:
    link_specifiers: Optional[List[typedlinkspecifier.TypedLinkSpecifier]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'LinkSpecifiers' }})
    next_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'NextToken' }})
    
