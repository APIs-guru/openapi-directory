from dataclasses import dataclass, field
from typing import List,Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class OwnerDirectoryDescription:
    r"""OwnerDirectoryDescription
    Describes the directory owner account details that have been shared to the directory consumer account.
    """
    
    account_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('AccountId') }})
    directory_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('DirectoryId') }})
    dns_ip_addrs: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('DnsIpAddrs') }})
    radius_settings: Optional[RadiusSettings] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('RadiusSettings') }})
    radius_status: Optional[RadiusStatusEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('RadiusStatus') }})
    vpc_settings: Optional[DirectoryVpcSettingsDescription] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('VpcSettings') }})
    
