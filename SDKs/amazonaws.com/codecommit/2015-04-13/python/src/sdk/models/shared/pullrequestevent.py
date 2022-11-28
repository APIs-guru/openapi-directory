from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class PullRequestEvent:
    r"""PullRequestEvent
    Returns information about a pull request event.
    """
    
    actor_arn: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('actorArn') }})
    approval_rule_event_metadata: Optional[ApprovalRuleEventMetadata] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('approvalRuleEventMetadata') }})
    approval_rule_overridden_event_metadata: Optional[ApprovalRuleOverriddenEventMetadata] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('approvalRuleOverriddenEventMetadata') }})
    approval_state_changed_event_metadata: Optional[ApprovalStateChangedEventMetadata] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('approvalStateChangedEventMetadata') }})
    event_date: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('eventDate'), 'encoder': utils.datetimeisoformat(True), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    pull_request_created_event_metadata: Optional[PullRequestCreatedEventMetadata] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('pullRequestCreatedEventMetadata') }})
    pull_request_event_type: Optional[PullRequestEventTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('pullRequestEventType') }})
    pull_request_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('pullRequestId') }})
    pull_request_merged_state_changed_event_metadata: Optional[PullRequestMergedStateChangedEventMetadata] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('pullRequestMergedStateChangedEventMetadata') }})
    pull_request_source_reference_updated_event_metadata: Optional[PullRequestSourceReferenceUpdatedEventMetadata] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('pullRequestSourceReferenceUpdatedEventMetadata') }})
    pull_request_status_changed_event_metadata: Optional[PullRequestStatusChangedEventMetadata] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('pullRequestStatusChangedEventMetadata') }})
    
