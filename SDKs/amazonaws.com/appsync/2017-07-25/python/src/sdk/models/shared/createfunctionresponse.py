from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import functionconfiguration


@dataclass_json
@dataclass
class CreateFunctionResponse:
    function_configuration: Optional[functionconfiguration.FunctionConfiguration] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'functionConfiguration' }})
    
