from dataclasses import dataclass, field
from typing import List
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class CreateConditionalForwarderRequest:
    r"""CreateConditionalForwarderRequest
    Initiates the creation of a conditional forwarder for your Directory Service for Microsoft Active Directory. Conditional forwarders are required in order to set up a trust relationship with another domain.
    """
    
    directory_id: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('DirectoryId') }})
    dns_ip_addrs: List[str] = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('DnsIpAddrs') }})
    remote_domain_name: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('RemoteDomainName') }})
    
