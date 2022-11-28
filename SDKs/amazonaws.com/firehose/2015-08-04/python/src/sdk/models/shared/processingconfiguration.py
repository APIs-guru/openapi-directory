from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class ProcessingConfiguration:
    r"""ProcessingConfiguration
    Describes a data processing configuration.
    """
    
    enabled: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Enabled') }})
    processors: Optional[List[Processor]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Processors') }})
    
