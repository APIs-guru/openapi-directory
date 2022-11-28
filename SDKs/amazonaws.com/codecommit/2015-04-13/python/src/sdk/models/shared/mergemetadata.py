from dataclasses import dataclass, field
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class MergeMetadata:
    r"""MergeMetadata
    Returns information about a merge or potential merge between a source reference and a destination reference in a pull request.
    """
    
    is_merged: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('isMerged') }})
    merge_commit_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('mergeCommitId') }})
    merge_option: Optional[MergeOptionTypeEnumEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('mergeOption') }})
    merged_by: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('mergedBy') }})
    
