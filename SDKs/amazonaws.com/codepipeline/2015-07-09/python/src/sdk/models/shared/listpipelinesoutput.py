from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class ListPipelinesOutput:
    r"""ListPipelinesOutput
    Represents the output of a <code>ListPipelines</code> action.
    """
    
    next_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('nextToken') }})
    pipelines: Optional[List[PipelineSummary]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('pipelines') }})
    
