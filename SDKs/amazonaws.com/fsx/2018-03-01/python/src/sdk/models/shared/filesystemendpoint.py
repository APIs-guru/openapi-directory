from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class FileSystemEndpoint:
    r"""FileSystemEndpoint
    An Amazon FSx for NetApp ONTAP file system has two endpoints that are used to access data or to manage the file system using the NetApp ONTAP CLI, REST API, or NetApp SnapMirror. They are the <code>Management</code> and <code>Intercluster</code> endpoints.
    """
    
    dns_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('DNSName') }})
    ip_addresses: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('IpAddresses') }})
    
