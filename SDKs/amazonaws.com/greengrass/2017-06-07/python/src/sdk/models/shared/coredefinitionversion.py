from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class CoreDefinitionVersion:
    r"""CoreDefinitionVersion
    Information about a core definition version.
    """
    
    cores: Optional[List[Core]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Cores') }})
    
