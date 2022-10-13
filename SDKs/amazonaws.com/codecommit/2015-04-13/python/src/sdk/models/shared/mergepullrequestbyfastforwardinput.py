from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class MergePullRequestByFastForwardInput:
    pull_request_id: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'pullRequestId' }})
    repository_name: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'repositoryName' }})
    source_commit_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'sourceCommitId' }})
    
