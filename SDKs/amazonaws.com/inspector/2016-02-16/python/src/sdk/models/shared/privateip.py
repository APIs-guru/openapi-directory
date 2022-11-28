from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class PrivateIP:
    r"""PrivateIP
    Contains information about a private IP address associated with a network interface. This data type is used as a response element in the <a>DescribeFindings</a> action.
    """
    
    private_dns_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('privateDnsName') }})
    private_ip_address: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('privateIpAddress') }})
    
