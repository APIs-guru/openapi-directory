from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class MergeBranchesByFastForwardInput:
    destination_commit_specifier: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('destinationCommitSpecifier') }})
    repository_name: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('repositoryName') }})
    source_commit_specifier: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('sourceCommitSpecifier') }})
    target_branch: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('targetBranch') }})
    
