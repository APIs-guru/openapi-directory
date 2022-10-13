from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import inputconfiguration
from . import inputdefinition


@dataclass_json
@dataclass
class Input:
    input_configuration: Optional[inputconfiguration.InputConfiguration] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'inputConfiguration' }})
    input_definition: Optional[inputdefinition.InputDefinition] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'inputDefinition' }})
    
