from dataclasses import dataclass, field
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class MergePullRequestByThreeWayInput:
    pull_request_id: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('pullRequestId') }})
    repository_name: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('repositoryName') }})
    author_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('authorName') }})
    commit_message: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('commitMessage') }})
    conflict_detail_level: Optional[ConflictDetailLevelTypeEnumEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('conflictDetailLevel') }})
    conflict_resolution: Optional[ConflictResolution] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('conflictResolution') }})
    conflict_resolution_strategy: Optional[ConflictResolutionStrategyTypeEnumEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('conflictResolutionStrategy') }})
    email: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('email') }})
    keep_empty_folders: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('keepEmptyFolders') }})
    source_commit_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('sourceCommitId') }})
    
