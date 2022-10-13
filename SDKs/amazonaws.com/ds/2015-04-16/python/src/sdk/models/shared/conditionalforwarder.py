from dataclasses import dataclass, field
from typing import Enum,List,Optional
from dataclasses_json import dataclass_json
from . import replicationscope_enum


@dataclass_json
@dataclass
class ConditionalForwarder:
    dns_ip_addrs: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'DnsIpAddrs' }})
    remote_domain_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'RemoteDomainName' }})
    replication_scope: Optional[replicationscope_enum.ReplicationScopeEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ReplicationScope' }})
    
