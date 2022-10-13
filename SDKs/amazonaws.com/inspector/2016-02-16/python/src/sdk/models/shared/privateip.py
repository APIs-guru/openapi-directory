from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class PrivateIP:
    private_dns_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'privateDnsName' }})
    private_ip_address: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'privateIpAddress' }})
    
