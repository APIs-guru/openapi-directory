from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import virtualinterfacetesthistory


@dataclass_json
@dataclass
class StartBgpFailoverTestResponse:
    virtual_interface_test: Optional[virtualinterfacetesthistory.VirtualInterfaceTestHistory] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'virtualInterfaceTest' }})
    
