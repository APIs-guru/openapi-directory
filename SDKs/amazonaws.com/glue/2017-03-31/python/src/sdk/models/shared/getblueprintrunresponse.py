from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import blueprintrun


@dataclass_json
@dataclass
class GetBlueprintRunResponse:
    blueprint_run: Optional[blueprintrun.BlueprintRun] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'BlueprintRun' }})
    
