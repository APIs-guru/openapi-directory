from dataclasses import dataclass, field
from typing import Enum,List,Optional
from dataclasses_json import dataclass_json
from . import selectiveauth_enum
from . import trustdirection_enum
from . import trusttype_enum


@dataclass_json
@dataclass
class CreateTrustRequest:
    conditional_forwarder_ip_addrs: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ConditionalForwarderIpAddrs' }})
    directory_id: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'DirectoryId' }})
    remote_domain_name: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'RemoteDomainName' }})
    selective_auth: Optional[selectiveauth_enum.SelectiveAuthEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'SelectiveAuth' }})
    trust_direction: trustdirection_enum.TrustDirectionEnum = field(default=None, metadata={'dataclasses_json': { 'field_name': 'TrustDirection' }})
    trust_password: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'TrustPassword' }})
    trust_type: Optional[trusttype_enum.TrustTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'TrustType' }})
    
