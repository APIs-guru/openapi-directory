from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import sagemakerpipelineparameter


@dataclass_json
@dataclass
class SageMakerPipelineParameters:
    pipeline_parameter_list: Optional[List[sagemakerpipelineparameter.SageMakerPipelineParameter]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'PipelineParameterList' }})
    
