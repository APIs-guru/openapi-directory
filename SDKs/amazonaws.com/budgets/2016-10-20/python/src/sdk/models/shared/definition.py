from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class Definition:
    r"""Definition
     Specifies all of the type-specific parameters. 
    """
    
    iam_action_definition: Optional[IamActionDefinition] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('IamActionDefinition') }})
    scp_action_definition: Optional[ScpActionDefinition] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ScpActionDefinition') }})
    ssm_action_definition: Optional[SsmActionDefinition] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('SsmActionDefinition') }})
    
