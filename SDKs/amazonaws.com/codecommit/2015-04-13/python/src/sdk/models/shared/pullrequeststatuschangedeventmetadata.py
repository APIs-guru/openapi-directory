from dataclasses import dataclass, field
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class PullRequestStatusChangedEventMetadata:
    r"""PullRequestStatusChangedEventMetadata
    Information about a change to the status of a pull request.
    """
    
    pull_request_status: Optional[PullRequestStatusEnumEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('pullRequestStatus') }})
    
