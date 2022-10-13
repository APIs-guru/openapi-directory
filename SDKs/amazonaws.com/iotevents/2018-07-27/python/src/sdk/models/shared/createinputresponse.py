from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import inputconfiguration


@dataclass_json
@dataclass
class CreateInputResponse:
    input_configuration: Optional[inputconfiguration.InputConfiguration] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'inputConfiguration' }})
    
