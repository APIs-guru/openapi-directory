from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class ComponentConfigurationUpdate:
    merge: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'merge' }})
    reset: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'reset' }})
    
