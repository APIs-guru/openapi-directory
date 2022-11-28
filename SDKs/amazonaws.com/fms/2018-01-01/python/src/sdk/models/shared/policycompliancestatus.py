from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class PolicyComplianceStatus:
    r"""PolicyComplianceStatus
    Indicates whether the account is compliant with the specified policy. An account is considered noncompliant if it includes resources that are not protected by the policy, for WAF and Shield Advanced policies, or that are noncompliant with the policy, for security group policies.
    """
    
    evaluation_results: Optional[List[EvaluationResult]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('EvaluationResults') }})
    issue_info_map: Optional[dict[str, str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('IssueInfoMap') }})
    last_updated: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('LastUpdated'), 'encoder': utils.datetimeisoformat(True), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    member_account: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('MemberAccount') }})
    policy_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('PolicyId') }})
    policy_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('PolicyName') }})
    policy_owner: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('PolicyOwner') }})
    
