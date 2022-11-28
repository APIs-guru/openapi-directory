from dataclasses import dataclass, field
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class BootstrapActionConfig:
    r"""BootstrapActionConfig
    Configuration of a bootstrap action.
    """
    
    name: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('Name') }})
    script_bootstrap_action: ScriptBootstrapActionConfig = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('ScriptBootstrapAction') }})
    
