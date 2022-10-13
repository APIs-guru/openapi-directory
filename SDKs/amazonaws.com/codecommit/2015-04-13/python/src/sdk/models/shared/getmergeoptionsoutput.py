from dataclasses import dataclass, field
from typing import Enum,List
from dataclasses_json import dataclass_json
from . import mergeoptiontypeenum_enum


@dataclass_json
@dataclass
class GetMergeOptionsOutput:
    base_commit_id: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'baseCommitId' }})
    destination_commit_id: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'destinationCommitId' }})
    merge_options: List[mergeoptiontypeenum_enum.MergeOptionTypeEnumEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'mergeOptions' }})
    source_commit_id: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'sourceCommitId' }})
    
