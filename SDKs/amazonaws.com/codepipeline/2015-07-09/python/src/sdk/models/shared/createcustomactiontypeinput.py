from dataclasses import dataclass, field
from typing import List,Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class CreateCustomActionTypeInput:
    r"""CreateCustomActionTypeInput
    Represents the input of a CreateCustomActionType operation.
    """
    
    category: ActionCategoryEnum = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('category') }})
    input_artifact_details: ArtifactDetails = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('inputArtifactDetails') }})
    output_artifact_details: ArtifactDetails = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('outputArtifactDetails') }})
    provider: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('provider') }})
    version: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('version') }})
    configuration_properties: Optional[List[ActionConfigurationProperty]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('configurationProperties') }})
    settings: Optional[ActionTypeSettings] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('settings') }})
    tags: Optional[List[Tag]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('tags') }})
    
