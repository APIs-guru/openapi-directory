from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class CreateLunaClientRequest:
    certificate: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Certificate' }})
    label: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Label' }})
    
