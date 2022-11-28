from dataclasses import dataclass, field
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class CompromisedCredentialsActionsType:
    r"""CompromisedCredentialsActionsType
    The compromised credentials actions type
    """
    
    event_action: CompromisedCredentialsEventActionTypeEnum = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('EventAction') }})
    
