from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class MethodResponse:
    response_models: Optional[dict[str, str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'responseModels' }})
    response_parameters: Optional[dict[str, bool]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'responseParameters' }})
    status_code: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'statusCode' }})
    
