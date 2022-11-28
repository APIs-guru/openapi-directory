from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class BuildSystemSharedDtoStep:
    r"""BuildSystemSharedDtoStep
    Step
    """
    
    config_required: bool = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('ConfigRequired') }})
    implementation_id: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('ImplementationID') }})
    name: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('Name') }})
    deleted: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Deleted') }})
    description: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Description') }})
    parameters: Optional[List[BuildSystemSharedDtoParameter]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Parameters') }})
    step_id: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('StepID') }})
    

@dataclass_json
@dataclass
class BuildSystemSharedDtoStepInput:
    r"""BuildSystemSharedDtoStepInput
    Step
    """
    
    config_required: bool = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('ConfigRequired') }, 'form': { 'field_name': 'ConfigRequired' }})
    implementation_id: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('ImplementationID') }, 'form': { 'field_name': 'ImplementationID' }})
    name: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('Name') }, 'form': { 'field_name': 'Name' }})
    deleted: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Deleted') }, 'form': { 'field_name': 'Deleted' }})
    description: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Description') }, 'form': { 'field_name': 'Description' }})
    step_id: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('StepID') }, 'form': { 'field_name': 'StepID' }})
    
