from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import virtualinterfacetesthistory


@dataclass_json
@dataclass
class ListVirtualInterfaceTestHistoryResponse:
    next_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'nextToken' }})
    virtual_interface_test_history: Optional[List[virtualinterfacetesthistory.VirtualInterfaceTestHistory]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'virtualInterfaceTestHistory' }})
    
