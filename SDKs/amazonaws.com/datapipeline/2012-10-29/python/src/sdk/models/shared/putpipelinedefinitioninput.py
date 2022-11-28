from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class PutPipelineDefinitionInput:
    r"""PutPipelineDefinitionInput
    Contains the parameters for PutPipelineDefinition.
    """
    
    pipeline_id: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('pipelineId') }})
    pipeline_objects: List[PipelineObject] = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('pipelineObjects') }})
    parameter_objects: Optional[List[ParameterObject]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('parameterObjects') }})
    parameter_values: Optional[List[ParameterValue]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('parameterValues') }})
    
