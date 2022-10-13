from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import serializer


@dataclass_json
@dataclass
class OutputFormatConfiguration:
    serializer: Optional[serializer.Serializer] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Serializer' }})
    
