from dataclasses import dataclass, field
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class GetFileOutput:
    blob_id: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('blobId') }})
    commit_id: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('commitId') }})
    file_content: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('fileContent') }})
    file_mode: FileModeTypeEnumEnum = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('fileMode') }})
    file_path: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('filePath') }})
    file_size: int = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('fileSize') }})
    
