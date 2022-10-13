from dataclasses import dataclass, field
from typing import Enum,Optional
from dataclasses_json import dataclass_json
from . import mergeoptiontypeenum_enum


@dataclass_json
@dataclass
class MergeMetadata:
    is_merged: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'isMerged' }})
    merge_commit_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'mergeCommitId' }})
    merge_option: Optional[mergeoptiontypeenum_enum.MergeOptionTypeEnumEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'mergeOption' }})
    merged_by: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'mergedBy' }})
    
