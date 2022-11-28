from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class ActionExecutionOutput:
    r"""ActionExecutionOutput
    Output details listed for an action execution, such as the action execution result.
    """
    
    execution_result: Optional[ActionExecutionResult] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('executionResult') }})
    output_artifacts: Optional[List[ArtifactDetail]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('outputArtifacts') }})
    output_variables: Optional[dict[str, str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('outputVariables') }})
    
