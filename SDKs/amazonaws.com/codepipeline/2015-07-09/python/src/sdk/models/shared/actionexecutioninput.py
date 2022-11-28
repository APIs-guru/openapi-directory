from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class ActionExecutionInput:
    r"""ActionExecutionInput
    Input information used for an action execution.
    """
    
    action_type_id: Optional[ActionTypeID] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('actionTypeId') }})
    configuration: Optional[dict[str, str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('configuration') }})
    input_artifacts: Optional[List[ArtifactDetail]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('inputArtifacts') }})
    namespace: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('namespace') }})
    region: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('region') }})
    resolved_configuration: Optional[dict[str, str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('resolvedConfiguration') }})
    role_arn: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('roleArn') }})
    
