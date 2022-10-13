from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import onenterlifecycle
from . import onexitlifecycle
from . import oninputlifecycle


@dataclass_json
@dataclass
class State:
    on_enter: Optional[onenterlifecycle.OnEnterLifecycle] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'onEnter' }})
    on_exit: Optional[onexitlifecycle.OnExitLifecycle] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'onExit' }})
    on_input: Optional[oninputlifecycle.OnInputLifecycle] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'onInput' }})
    state_name: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'stateName' }})
    
