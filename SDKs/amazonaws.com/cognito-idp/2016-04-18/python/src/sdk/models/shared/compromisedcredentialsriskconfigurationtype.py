from dataclasses import dataclass, field
from typing import List,Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class CompromisedCredentialsRiskConfigurationType:
    r"""CompromisedCredentialsRiskConfigurationType
    The compromised credentials risk configuration type.
    """
    
    actions: CompromisedCredentialsActionsType = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('Actions') }})
    event_filter: Optional[List[EventFilterTypeEnum]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('EventFilter') }})
    
