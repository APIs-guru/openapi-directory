from dataclasses import dataclass, field
from typing import Enum,Optional
from dataclasses_json import dataclass_json
from . import conflictdetailleveltypeenum_enum
from . import conflictresolution
from . import conflictresolutionstrategytypeenum_enum


@dataclass_json
@dataclass
class MergeBranchesByThreeWayInput:
    author_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'authorName' }})
    commit_message: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'commitMessage' }})
    conflict_detail_level: Optional[conflictdetailleveltypeenum_enum.ConflictDetailLevelTypeEnumEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'conflictDetailLevel' }})
    conflict_resolution: Optional[conflictresolution.ConflictResolution] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'conflictResolution' }})
    conflict_resolution_strategy: Optional[conflictresolutionstrategytypeenum_enum.ConflictResolutionStrategyTypeEnumEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'conflictResolutionStrategy' }})
    destination_commit_specifier: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'destinationCommitSpecifier' }})
    email: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'email' }})
    keep_empty_folders: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'keepEmptyFolders' }})
    repository_name: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'repositoryName' }})
    source_commit_specifier: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'sourceCommitSpecifier' }})
    target_branch: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'targetBranch' }})
    
