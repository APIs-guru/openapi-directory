from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class NetworkInterface:
    network_interface_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'networkInterfaceId' }})
    subnet_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'subnetId' }})
    
