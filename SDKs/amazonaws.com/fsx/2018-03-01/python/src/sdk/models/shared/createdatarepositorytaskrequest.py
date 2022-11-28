from dataclasses import dataclass, field
from typing import List,Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class CreateDataRepositoryTaskRequest:
    file_system_id: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('FileSystemId') }})
    report: CompletionReport = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('Report') }})
    type: DataRepositoryTaskTypeEnum = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('Type') }})
    client_request_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ClientRequestToken') }})
    paths: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Paths') }})
    tags: Optional[List[Tag]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Tags') }})
    
