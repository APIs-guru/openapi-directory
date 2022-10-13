from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import actionexecutionresult
from . import artifactdetail


@dataclass_json
@dataclass
class ActionExecutionOutput:
    execution_result: Optional[actionexecutionresult.ActionExecutionResult] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'executionResult' }})
    output_artifacts: Optional[List[artifactdetail.ArtifactDetail]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'outputArtifacts' }})
    output_variables: Optional[dict[str, str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'outputVariables' }})
    
