from dataclasses import dataclass, field
from typing import Enum
from dataclasses_json import dataclass_json
from . import overridestatus_enum


@dataclass_json
@dataclass
class OverridePullRequestApprovalRulesInput:
    override_status: overridestatus_enum.OverrideStatusEnum = field(default=None, metadata={'dataclasses_json': { 'field_name': 'overrideStatus' }})
    pull_request_id: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'pullRequestId' }})
    revision_id: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'revisionId' }})
    
