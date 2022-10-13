from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class DescribeVirtualInterfacesRequest:
    connection_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'connectionId' }})
    virtual_interface_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'virtualInterfaceId' }})
    
