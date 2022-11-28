from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class SvmEndpoint:
    r"""SvmEndpoint
    An Amazon FSx for NetApp ONTAP storage virtual machine (SVM) has four endpoints that are used to access data or to manage the SVM using the NetApp ONTAP CLI, REST API, or NetApp CloudManager. They are the <code>Iscsi</code>, <code>Management</code>, <code>Nfs</code>, and <code>Smb</code> endpoints.
    """
    
    dns_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('DNSName') }})
    ip_addresses: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('IpAddresses') }})
    
