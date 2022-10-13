from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class AttributeValue:
    n: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'N' }})
    s: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'S' }})
    sdm: Optional[dict[str, float]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'SDM' }})
    sl: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'SL' }})
    
