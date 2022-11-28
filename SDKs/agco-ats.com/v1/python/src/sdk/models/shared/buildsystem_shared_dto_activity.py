from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class BuildSystemSharedDtoActivity:
    r"""BuildSystemSharedDtoActivity
    A DTO for an IActivity
    """
    
    activity_id: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ActivityID') }})
    deleted: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Deleted') }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Name') }})
    parameters: Optional[List[BuildSystemSharedDtoParameter]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Parameters') }})
    steps: Optional[List[BuildSystemSharedDtoActivityStep]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Steps') }})
    

@dataclass_json
@dataclass
class BuildSystemSharedDtoActivityInput:
    r"""BuildSystemSharedDtoActivityInput
    A DTO for an IActivity
    """
    
    activity_id: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ActivityID') }, 'form': { 'field_name': 'ActivityID' }})
    deleted: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Deleted') }, 'form': { 'field_name': 'Deleted' }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Name') }, 'form': { 'field_name': 'Name' }})
    
