from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class AdvancedFieldSelector:
    ends_with: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'EndsWith' }})
    equals: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Equals' }})
    field: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Field' }})
    not_ends_with: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'NotEndsWith' }})
    not_equals: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'NotEquals' }})
    not_starts_with: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'NotStartsWith' }})
    starts_with: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'StartsWith' }})
    
