from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class PullRequestSourceReferenceUpdatedEventMetadata:
    after_commit_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'afterCommitId' }})
    before_commit_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'beforeCommitId' }})
    merge_base: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'mergeBase' }})
    repository_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'repositoryName' }})
    
