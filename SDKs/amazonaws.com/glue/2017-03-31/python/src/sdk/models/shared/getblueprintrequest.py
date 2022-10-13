from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class GetBlueprintRequest:
    include_blueprint: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'IncludeBlueprint' }})
    include_parameter_spec: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'IncludeParameterSpec' }})
    name: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Name' }})
    
