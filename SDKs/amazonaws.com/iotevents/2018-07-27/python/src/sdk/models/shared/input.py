from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class Input:
    r"""Input
    Information about the input.
    """
    
    input_configuration: Optional[InputConfiguration] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('inputConfiguration') }})
    input_definition: Optional[InputDefinition] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('inputDefinition') }})
    
