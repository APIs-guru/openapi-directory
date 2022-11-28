from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class BuildSystemSharedDtoJob:
    r"""BuildSystemSharedDtoJob
    A DTO for an IJob
    """
    
    activities: Optional[List[BuildSystemSharedDtoJobActivity]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Activities') }})
    deleted: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Deleted') }})
    job_id: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('JobID') }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Name') }})
    parameters: Optional[List[BuildSystemSharedDtoParameter]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Parameters') }})
    

@dataclass_json
@dataclass
class BuildSystemSharedDtoJobInput:
    r"""BuildSystemSharedDtoJobInput
    A DTO for an IJob
    """
    
    deleted: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Deleted') }, 'form': { 'field_name': 'Deleted' }})
    job_id: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('JobID') }, 'form': { 'field_name': 'JobID' }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Name') }, 'form': { 'field_name': 'Name' }})
    
