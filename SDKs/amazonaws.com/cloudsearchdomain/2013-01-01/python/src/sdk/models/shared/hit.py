from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class Hit:
    exprs: Optional[dict[str, str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'exprs' }})
    fields: Optional[dict[str, List[str]]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'fields' }})
    highlights: Optional[dict[str, str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'highlights' }})
    id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'id' }})
    
