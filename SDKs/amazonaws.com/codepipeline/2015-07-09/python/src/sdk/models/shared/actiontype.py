from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class ActionType:
    r"""ActionType
    Returns information about the details of an action type.
    """
    
    id: ActionTypeID = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    input_artifact_details: ArtifactDetails = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('inputArtifactDetails') }})
    output_artifact_details: ArtifactDetails = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('outputArtifactDetails') }})
    action_configuration_properties: Optional[List[ActionConfigurationProperty]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('actionConfigurationProperties') }})
    settings: Optional[ActionTypeSettings] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('settings') }})
    
