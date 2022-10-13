from dataclasses import dataclass, field
from typing import Enum,List,Optional
from dataclasses_json import dataclass_json
from . import taskdefinitionfamilystatus_enum


@dataclass_json
@dataclass
class ListTaskDefinitionFamiliesRequest:
    family_prefix: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'familyPrefix' }})
    max_results: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'maxResults' }})
    next_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'nextToken' }})
    status: Optional[taskdefinitionfamilystatus_enum.TaskDefinitionFamilyStatusEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'status' }})
    
