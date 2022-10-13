from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class BatchRestrictions:
    compute_types_allowed: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'computeTypesAllowed' }})
    maximum_builds_allowed: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'maximumBuildsAllowed' }})
    
