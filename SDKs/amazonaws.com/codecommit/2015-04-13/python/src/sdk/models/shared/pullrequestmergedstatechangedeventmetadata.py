from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class PullRequestMergedStateChangedEventMetadata:
    r"""PullRequestMergedStateChangedEventMetadata
    Returns information about the change in the merge state for a pull request event. 
    """
    
    destination_reference: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('destinationReference') }})
    merge_metadata: Optional[MergeMetadata] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('mergeMetadata') }})
    repository_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('repositoryName') }})
    
