from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import deserializer


@dataclass_json
@dataclass
class InputFormatConfiguration:
    deserializer: Optional[deserializer.Deserializer] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Deserializer' }})
    
