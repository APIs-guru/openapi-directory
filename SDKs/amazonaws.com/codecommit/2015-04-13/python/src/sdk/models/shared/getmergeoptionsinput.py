from dataclasses import dataclass, field
from typing import Enum,Optional
from dataclasses_json import dataclass_json
from . import conflictdetailleveltypeenum_enum
from . import conflictresolutionstrategytypeenum_enum


@dataclass_json
@dataclass
class GetMergeOptionsInput:
    conflict_detail_level: Optional[conflictdetailleveltypeenum_enum.ConflictDetailLevelTypeEnumEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'conflictDetailLevel' }})
    conflict_resolution_strategy: Optional[conflictresolutionstrategytypeenum_enum.ConflictResolutionStrategyTypeEnumEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'conflictResolutionStrategy' }})
    destination_commit_specifier: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'destinationCommitSpecifier' }})
    repository_name: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'repositoryName' }})
    source_commit_specifier: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'sourceCommitSpecifier' }})
    
