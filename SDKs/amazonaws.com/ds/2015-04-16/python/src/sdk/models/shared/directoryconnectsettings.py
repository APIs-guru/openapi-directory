from dataclasses import dataclass, field
from typing import List
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class DirectoryConnectSettings:
    r"""DirectoryConnectSettings
    Contains information for the <a>ConnectDirectory</a> operation when an AD Connector directory is being created.
    """
    
    customer_dns_ips: List[str] = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('CustomerDnsIps') }})
    customer_user_name: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('CustomerUserName') }})
    subnet_ids: List[str] = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('SubnetIds') }})
    vpc_id: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('VpcId') }})
    
