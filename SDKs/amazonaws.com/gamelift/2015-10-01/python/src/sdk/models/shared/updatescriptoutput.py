from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import script


@dataclass_json
@dataclass
class UpdateScriptOutput:
    script: Optional[script.Script] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Script' }})
    
