from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class ReadPipelineResponse:
    r"""ReadPipelineResponse
    The <code>ReadPipelineResponse</code> structure.
    """
    
    pipeline: Optional[Pipeline] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Pipeline') }})
    warnings: Optional[List[Warning]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Warnings') }})
    
