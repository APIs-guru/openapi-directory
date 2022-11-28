from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class SageMakerPipelineParameters:
    r"""SageMakerPipelineParameters
    These are custom parameters to use when the target is a SageMaker Model Building Pipeline that starts based on EventBridge events.
    """
    
    pipeline_parameter_list: Optional[List[SageMakerPipelineParameter]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('PipelineParameterList') }})
    
