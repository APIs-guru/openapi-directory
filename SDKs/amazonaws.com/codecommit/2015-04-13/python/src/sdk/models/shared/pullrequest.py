from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import List,Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class PullRequest:
    r"""PullRequest
    Returns information about a pull request.
    """
    
    approval_rules: Optional[List[ApprovalRule]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('approvalRules') }})
    author_arn: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('authorArn') }})
    client_request_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('clientRequestToken') }})
    creation_date: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('creationDate'), 'encoder': utils.datetimeisoformat(True), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    description: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('description') }})
    last_activity_date: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('lastActivityDate'), 'encoder': utils.datetimeisoformat(True), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    pull_request_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('pullRequestId') }})
    pull_request_status: Optional[PullRequestStatusEnumEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('pullRequestStatus') }})
    pull_request_targets: Optional[List[PullRequestTarget]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('pullRequestTargets') }})
    revision_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('revisionId') }})
    title: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('title') }})
    
