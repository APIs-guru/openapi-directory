from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import errorhandlingconfig


@dataclass_json
@dataclass
class HoneycodeDestinationProperties:
    error_handling_config: Optional[errorhandlingconfig.ErrorHandlingConfig] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'errorHandlingConfig' }})
    object: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'object' }})
    
