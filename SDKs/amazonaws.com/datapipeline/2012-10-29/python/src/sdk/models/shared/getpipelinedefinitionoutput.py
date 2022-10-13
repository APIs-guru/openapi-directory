from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import parameterobject
from . import parametervalue
from . import pipelineobject


@dataclass_json
@dataclass
class GetPipelineDefinitionOutput:
    parameter_objects: Optional[List[parameterobject.ParameterObject]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'parameterObjects' }})
    parameter_values: Optional[List[parametervalue.ParameterValue]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'parameterValues' }})
    pipeline_objects: Optional[List[pipelineobject.PipelineObject]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'pipelineObjects' }})
    
