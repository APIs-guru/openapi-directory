from dataclasses import dataclass, field
from typing import Enum
from dataclasses_json import dataclass_json
from . import pullrequeststatusenum_enum


@dataclass_json
@dataclass
class UpdatePullRequestStatusInput:
    pull_request_id: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'pullRequestId' }})
    pull_request_status: pullrequeststatusenum_enum.PullRequestStatusEnumEnum = field(default=None, metadata={'dataclasses_json': { 'field_name': 'pullRequestStatus' }})
    
