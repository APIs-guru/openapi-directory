from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class ListPipelinesOutput:
    r"""ListPipelinesOutput
    Contains the output of ListPipelines.
    """
    
    pipeline_id_list: List[PipelineIDName] = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('pipelineIdList') }})
    has_more_results: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('hasMoreResults') }})
    marker: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('marker') }})
    
