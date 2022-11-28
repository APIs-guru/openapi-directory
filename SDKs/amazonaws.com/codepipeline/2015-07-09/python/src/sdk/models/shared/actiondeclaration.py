from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class ActionDeclaration:
    r"""ActionDeclaration
    Represents information about an action declaration.
    """
    
    action_type_id: ActionTypeID = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('actionTypeId') }})
    name: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    configuration: Optional[dict[str, str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('configuration') }})
    input_artifacts: Optional[List[InputArtifact]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('inputArtifacts') }})
    namespace: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('namespace') }})
    output_artifacts: Optional[List[OutputArtifact]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('outputArtifacts') }})
    region: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('region') }})
    role_arn: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('roleArn') }})
    run_order: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('runOrder') }})
    
