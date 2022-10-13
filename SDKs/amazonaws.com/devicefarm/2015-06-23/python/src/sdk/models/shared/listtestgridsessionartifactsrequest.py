from dataclasses import dataclass, field
from typing import Enum,List,Optional
from dataclasses_json import dataclass_json
from . import testgridsessionartifactcategory_enum


@dataclass_json
@dataclass
class ListTestGridSessionArtifactsRequest:
    max_result: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'maxResult' }})
    next_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'nextToken' }})
    session_arn: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'sessionArn' }})
    type: Optional[testgridsessionartifactcategory_enum.TestGridSessionArtifactCategoryEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'type' }})
    
