from dataclasses import dataclass, field
from typing import List
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class UpdateConditionalForwarderRequest:
    directory_id: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'DirectoryId' }})
    dns_ip_addrs: List[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'DnsIpAddrs' }})
    remote_domain_name: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'RemoteDomainName' }})
    
