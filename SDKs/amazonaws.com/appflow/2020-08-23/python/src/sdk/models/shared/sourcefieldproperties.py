from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class SourceFieldProperties:
    is_queryable: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'isQueryable' }})
    is_retrievable: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'isRetrievable' }})
    
