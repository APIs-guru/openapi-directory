from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import networkprofile


@dataclass_json
@dataclass
class GetNetworkProfileResult:
    network_profile: Optional[networkprofile.NetworkProfile] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'networkProfile' }})
    
