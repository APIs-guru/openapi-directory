from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class ScriptBootstrapActionConfig:
    r"""ScriptBootstrapActionConfig
    Configuration of the script to run during a bootstrap action.
    """
    
    path: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('Path') }})
    args: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Args') }})
    
