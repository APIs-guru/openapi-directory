from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class CreateMatchmakingConfigurationOutput:
    r"""CreateMatchmakingConfigurationOutput
    Represents the returned data in response to a request operation.
    """
    
    configuration: Optional[MatchmakingConfiguration] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Configuration') }})
    
