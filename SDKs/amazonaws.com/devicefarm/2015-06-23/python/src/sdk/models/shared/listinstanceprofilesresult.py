from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import instanceprofile


@dataclass_json
@dataclass
class ListInstanceProfilesResult:
    instance_profiles: Optional[List[instanceprofile.InstanceProfile]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'instanceProfiles' }})
    next_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'nextToken' }})
    
