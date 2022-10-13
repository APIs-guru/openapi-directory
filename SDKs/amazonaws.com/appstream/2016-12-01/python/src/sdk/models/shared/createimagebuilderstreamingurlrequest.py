from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class CreateImageBuilderStreamingURLRequest:
    name: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Name' }})
    validity: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Validity' }})
    
