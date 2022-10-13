from dataclasses import dataclass, field
from typing import Enum,List,Optional
from dataclasses_json import dataclass_json
from . import radiussettings
from . import radiusstatus_enum
from . import directoryvpcsettingsdescription


@dataclass_json
@dataclass
class OwnerDirectoryDescription:
    account_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'AccountId' }})
    directory_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'DirectoryId' }})
    dns_ip_addrs: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'DnsIpAddrs' }})
    radius_settings: Optional[radiussettings.RadiusSettings] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'RadiusSettings' }})
    radius_status: Optional[radiusstatus_enum.RadiusStatusEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'RadiusStatus' }})
    vpc_settings: Optional[directoryvpcsettingsdescription.DirectoryVpcSettingsDescription] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'VpcSettings' }})
    
