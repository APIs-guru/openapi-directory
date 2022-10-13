from dataclasses import dataclass, field
from typing import Enum,List,Optional
from dataclasses_json import dataclass_json
from . import conflictdetailleveltypeenum_enum
from . import conflictresolutionstrategytypeenum_enum
from . import mergeoptiontypeenum_enum


@dataclass_json
@dataclass
class BatchDescribeMergeConflictsInput:
    conflict_detail_level: Optional[conflictdetailleveltypeenum_enum.ConflictDetailLevelTypeEnumEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'conflictDetailLevel' }})
    conflict_resolution_strategy: Optional[conflictresolutionstrategytypeenum_enum.ConflictResolutionStrategyTypeEnumEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'conflictResolutionStrategy' }})
    destination_commit_specifier: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'destinationCommitSpecifier' }})
    file_paths: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'filePaths' }})
    max_conflict_files: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'maxConflictFiles' }})
    max_merge_hunks: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'maxMergeHunks' }})
    merge_option: mergeoptiontypeenum_enum.MergeOptionTypeEnumEnum = field(default=None, metadata={'dataclasses_json': { 'field_name': 'mergeOption' }})
    next_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'nextToken' }})
    repository_name: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'repositoryName' }})
    source_commit_specifier: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'sourceCommitSpecifier' }})
    
