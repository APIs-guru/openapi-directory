from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class UpdatePullRequestApprovalStateInput:
    approval_state: ApprovalStateEnum = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('approvalState') }})
    pull_request_id: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('pullRequestId') }})
    revision_id: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('revisionId') }})
    
