from dataclasses import dataclass, field
from typing import List
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class GetMergeOptionsOutput:
    base_commit_id: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('baseCommitId') }})
    destination_commit_id: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('destinationCommitId') }})
    merge_options: List[MergeOptionTypeEnumEnum] = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('mergeOptions') }})
    source_commit_id: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('sourceCommitId') }})
    
