from dataclasses import dataclass, field
from datetime import datetime
from marshmallow import fields
import dateutil.parser
from typing import Enum,Optional
from dataclasses_json import dataclass_json
from . import approvalruleeventmetadata
from . import approvalruleoverriddeneventmetadata
from . import approvalstatechangedeventmetadata
from . import pullrequestcreatedeventmetadata
from . import pullrequesteventtype_enum
from . import pullrequestmergedstatechangedeventmetadata
from . import pullrequestsourcereferenceupdatedeventmetadata
from . import pullrequeststatuschangedeventmetadata


@dataclass_json
@dataclass
class PullRequestEvent:
    actor_arn: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'actorArn' }})
    approval_rule_event_metadata: Optional[approvalruleeventmetadata.ApprovalRuleEventMetadata] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'approvalRuleEventMetadata' }})
    approval_rule_overridden_event_metadata: Optional[approvalruleoverriddeneventmetadata.ApprovalRuleOverriddenEventMetadata] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'approvalRuleOverriddenEventMetadata' }})
    approval_state_changed_event_metadata: Optional[approvalstatechangedeventmetadata.ApprovalStateChangedEventMetadata] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'approvalStateChangedEventMetadata' }})
    event_date: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'eventDate', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    pull_request_created_event_metadata: Optional[pullrequestcreatedeventmetadata.PullRequestCreatedEventMetadata] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'pullRequestCreatedEventMetadata' }})
    pull_request_event_type: Optional[pullrequesteventtype_enum.PullRequestEventTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'pullRequestEventType' }})
    pull_request_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'pullRequestId' }})
    pull_request_merged_state_changed_event_metadata: Optional[pullrequestmergedstatechangedeventmetadata.PullRequestMergedStateChangedEventMetadata] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'pullRequestMergedStateChangedEventMetadata' }})
    pull_request_source_reference_updated_event_metadata: Optional[pullrequestsourcereferenceupdatedeventmetadata.PullRequestSourceReferenceUpdatedEventMetadata] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'pullRequestSourceReferenceUpdatedEventMetadata' }})
    pull_request_status_changed_event_metadata: Optional[pullrequeststatuschangedeventmetadata.PullRequestStatusChangedEventMetadata] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'pullRequestStatusChangedEventMetadata' }})
    
