from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class ReleaseLabelFilter:
    application: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Application' }})
    prefix: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Prefix' }})
    
