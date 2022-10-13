from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import blueprint


@dataclass_json
@dataclass
class GetBlueprintResponse:
    blueprint: Optional[blueprint.Blueprint] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Blueprint' }})
    
