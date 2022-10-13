from dataclasses import dataclass, field
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class GetPullRequestApprovalStatesInput:
    pull_request_id: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'pullRequestId' }})
    revision_id: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'revisionId' }})
    
