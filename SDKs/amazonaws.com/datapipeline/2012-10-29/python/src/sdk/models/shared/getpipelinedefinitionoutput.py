from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class GetPipelineDefinitionOutput:
    r"""GetPipelineDefinitionOutput
    Contains the output of GetPipelineDefinition.
    """
    
    parameter_objects: Optional[List[ParameterObject]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('parameterObjects') }})
    parameter_values: Optional[List[ParameterValue]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('parameterValues') }})
    pipeline_objects: Optional[List[PipelineObject]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('pipelineObjects') }})
    
