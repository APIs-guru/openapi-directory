from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class AttributeValue:
    b: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'B' }})
    bs: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'BS' }})
    n: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'N' }})
    ns: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'NS' }})
    s: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'S' }})
    ss: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'SS' }})
    
