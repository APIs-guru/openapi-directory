from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class FunctionDefinitionVersion:
    r"""FunctionDefinitionVersion
    Information about a function definition version.
    """
    
    default_config: Optional[FunctionDefaultConfig] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('DefaultConfig') }})
    functions: Optional[List[Function]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Functions') }})
    
