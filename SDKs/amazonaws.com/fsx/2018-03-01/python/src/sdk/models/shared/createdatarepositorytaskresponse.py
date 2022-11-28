from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class CreateDataRepositoryTaskResponse:
    data_repository_task: Optional[DataRepositoryTask] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('DataRepositoryTask') }})
    
