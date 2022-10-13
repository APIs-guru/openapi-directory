from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import bootstrapactionconfig


@dataclass_json
@dataclass
class BootstrapActionDetail:
    bootstrap_action_config: Optional[bootstrapactionconfig.BootstrapActionConfig] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'BootstrapActionConfig' }})
    
