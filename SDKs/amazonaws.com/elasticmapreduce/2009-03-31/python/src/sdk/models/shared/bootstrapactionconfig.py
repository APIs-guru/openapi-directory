from dataclasses import dataclass, field
from dataclasses_json import dataclass_json
from . import scriptbootstrapactionconfig


@dataclass_json
@dataclass
class BootstrapActionConfig:
    name: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Name' }})
    script_bootstrap_action: scriptbootstrapactionconfig.ScriptBootstrapActionConfig = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ScriptBootstrapAction' }})
    
