from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class ListFargateProfilesResponse:
    fargate_profile_names: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'fargateProfileNames' }})
    next_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'nextToken' }})
    
