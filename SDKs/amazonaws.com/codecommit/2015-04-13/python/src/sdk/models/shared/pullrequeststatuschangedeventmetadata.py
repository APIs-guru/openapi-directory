from dataclasses import dataclass, field
from typing import Enum,Optional
from dataclasses_json import dataclass_json
from . import pullrequeststatusenum_enum


@dataclass_json
@dataclass
class PullRequestStatusChangedEventMetadata:
    pull_request_status: Optional[pullrequeststatusenum_enum.PullRequestStatusEnumEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'pullRequestStatus' }})
    
