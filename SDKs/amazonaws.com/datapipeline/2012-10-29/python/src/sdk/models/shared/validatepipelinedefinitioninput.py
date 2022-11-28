from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class ValidatePipelineDefinitionInput:
    r"""ValidatePipelineDefinitionInput
    Contains the parameters for ValidatePipelineDefinition.
    """
    
    pipeline_id: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('pipelineId') }})
    pipeline_objects: List[PipelineObject] = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('pipelineObjects') }})
    parameter_objects: Optional[List[ParameterObject]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('parameterObjects') }})
    parameter_values: Optional[List[ParameterValue]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('parameterValues') }})
    
