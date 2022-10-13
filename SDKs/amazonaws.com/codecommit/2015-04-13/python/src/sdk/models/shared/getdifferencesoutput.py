from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import difference


@dataclass_json
@dataclass
class GetDifferencesOutput:
    next_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'NextToken' }})
    differences: Optional[List[difference.Difference]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'differences' }})
    
