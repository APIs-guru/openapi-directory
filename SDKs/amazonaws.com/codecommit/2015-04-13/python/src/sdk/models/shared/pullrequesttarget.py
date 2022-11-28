from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class PullRequestTarget:
    r"""PullRequestTarget
    Returns information about a pull request target.
    """
    
    destination_commit: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('destinationCommit') }})
    destination_reference: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('destinationReference') }})
    merge_base: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('mergeBase') }})
    merge_metadata: Optional[MergeMetadata] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('mergeMetadata') }})
    repository_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('repositoryName') }})
    source_commit: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('sourceCommit') }})
    source_reference: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('sourceReference') }})
    
