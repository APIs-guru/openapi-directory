from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class FileSystemEndpoint:
    dns_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'DNSName' }})
    ip_addresses: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'IpAddresses' }})
    
