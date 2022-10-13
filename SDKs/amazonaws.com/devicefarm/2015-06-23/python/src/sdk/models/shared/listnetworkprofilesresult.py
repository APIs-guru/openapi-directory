from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import networkprofile


@dataclass_json
@dataclass
class ListNetworkProfilesResult:
    network_profiles: Optional[List[networkprofile.NetworkProfile]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'networkProfiles' }})
    next_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'nextToken' }})
    
