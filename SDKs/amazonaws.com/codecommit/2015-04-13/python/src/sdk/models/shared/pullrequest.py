from dataclasses import dataclass, field
from datetime import datetime
from marshmallow import fields
import dateutil.parser
from typing import Enum,List,Optional
from dataclasses_json import dataclass_json
from . import approvalrule
from . import pullrequeststatusenum_enum
from . import pullrequesttarget


@dataclass_json
@dataclass
class PullRequest:
    approval_rules: Optional[List[approvalrule.ApprovalRule]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'approvalRules' }})
    author_arn: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'authorArn' }})
    client_request_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'clientRequestToken' }})
    creation_date: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'creationDate', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    description: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'description' }})
    last_activity_date: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'lastActivityDate', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    pull_request_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'pullRequestId' }})
    pull_request_status: Optional[pullrequeststatusenum_enum.PullRequestStatusEnumEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'pullRequestStatus' }})
    pull_request_targets: Optional[List[pullrequesttarget.PullRequestTarget]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'pullRequestTargets' }})
    revision_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'revisionId' }})
    title: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'title' }})
    
