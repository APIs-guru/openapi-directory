from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class DescribeObjectsOutput:
    r"""DescribeObjectsOutput
    Contains the output of DescribeObjects.
    """
    
    pipeline_objects: List[PipelineObject] = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('pipelineObjects') }})
    has_more_results: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('hasMoreResults') }})
    marker: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('marker') }})
    
