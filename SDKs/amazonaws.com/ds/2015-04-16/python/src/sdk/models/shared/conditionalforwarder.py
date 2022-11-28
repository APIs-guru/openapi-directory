from dataclasses import dataclass, field
from typing import List,Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class ConditionalForwarder:
    r"""ConditionalForwarder
    Points to a remote domain with which you are setting up a trust relationship. Conditional forwarders are required in order to set up a trust relationship with another domain.
    """
    
    dns_ip_addrs: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('DnsIpAddrs') }})
    remote_domain_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('RemoteDomainName') }})
    replication_scope: Optional[ReplicationScopeEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ReplicationScope') }})
    
