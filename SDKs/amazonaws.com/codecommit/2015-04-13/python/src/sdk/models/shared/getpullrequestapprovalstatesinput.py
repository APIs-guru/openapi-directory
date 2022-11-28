from dataclasses import dataclass, field
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class GetPullRequestApprovalStatesInput:
    pull_request_id: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('pullRequestId') }})
    revision_id: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('revisionId') }})
    
