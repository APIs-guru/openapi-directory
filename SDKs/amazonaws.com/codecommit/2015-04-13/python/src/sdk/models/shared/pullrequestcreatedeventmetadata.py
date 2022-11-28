from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class PullRequestCreatedEventMetadata:
    r"""PullRequestCreatedEventMetadata
    Metadata about the pull request that is used when comparing the pull request source with its destination.
    """
    
    destination_commit_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('destinationCommitId') }})
    merge_base: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('mergeBase') }})
    repository_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('repositoryName') }})
    source_commit_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('sourceCommitId') }})
    
