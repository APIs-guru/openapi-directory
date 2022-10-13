from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import protocolslistdatasummary


@dataclass_json
@dataclass
class ListProtocolsListsResponse:
    next_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'NextToken' }})
    protocols_lists: Optional[List[protocolslistdatasummary.ProtocolsListDataSummary]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ProtocolsLists' }})
    
