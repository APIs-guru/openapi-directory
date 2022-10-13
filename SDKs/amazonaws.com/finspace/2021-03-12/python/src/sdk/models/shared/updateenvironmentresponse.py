from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import environment


@dataclass_json
@dataclass
class UpdateEnvironmentResponse:
    environment: Optional[environment.Environment] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'environment' }})
    
