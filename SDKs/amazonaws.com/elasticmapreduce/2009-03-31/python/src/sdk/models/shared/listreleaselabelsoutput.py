from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class ListReleaseLabelsOutput:
    next_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'NextToken' }})
    release_labels: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ReleaseLabels' }})
    
