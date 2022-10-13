from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class SelfManagedActiveDirectoryConfigurationUpdates:
    dns_ips: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'DnsIps' }})
    password: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Password' }})
    user_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'UserName' }})
    
