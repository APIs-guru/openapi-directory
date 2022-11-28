from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class GetRepositoryTriggersOutput:
    r"""GetRepositoryTriggersOutput
    Represents the output of a get repository triggers operation.
    """
    
    configuration_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('configurationId') }})
    triggers: Optional[List[RepositoryTrigger]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('triggers') }})
    
