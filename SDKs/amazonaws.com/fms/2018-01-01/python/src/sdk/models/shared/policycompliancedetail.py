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
class PolicyComplianceDetail:
    r"""PolicyComplianceDetail
    Describes the noncompliant resources in a member account for a specific Firewall Manager policy. A maximum of 100 entries are displayed. If more than 100 resources are noncompliant, <code>EvaluationLimitExceeded</code> is set to <code>True</code>.
    """
    
    evaluation_limit_exceeded: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('EvaluationLimitExceeded') }})
    expired_at: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ExpiredAt'), 'encoder': utils.datetimeisoformat(True), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    issue_info_map: Optional[dict[str, str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('IssueInfoMap') }})
    member_account: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('MemberAccount') }})
    policy_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('PolicyId') }})
    policy_owner: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('PolicyOwner') }})
    violators: Optional[List[ComplianceViolator]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Violators') }})
    
