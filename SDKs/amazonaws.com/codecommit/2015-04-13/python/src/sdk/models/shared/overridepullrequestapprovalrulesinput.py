from dataclasses import dataclass, field
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class OverridePullRequestApprovalRulesInput:
    override_status: OverrideStatusEnum = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('overrideStatus') }})
    pull_request_id: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('pullRequestId') }})
    revision_id: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('revisionId') }})
    
