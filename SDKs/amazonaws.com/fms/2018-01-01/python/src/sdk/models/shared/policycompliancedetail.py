from dataclasses import dataclass, field
from datetime import datetime
from marshmallow import fields
import dateutil.parser
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import complianceviolator


@dataclass_json
@dataclass
class PolicyComplianceDetail:
    evaluation_limit_exceeded: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'EvaluationLimitExceeded' }})
    expired_at: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ExpiredAt', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    issue_info_map: Optional[dict[str, str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'IssueInfoMap' }})
    member_account: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'MemberAccount' }})
    policy_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'PolicyId' }})
    policy_owner: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'PolicyOwner' }})
    violators: Optional[List[complianceviolator.ComplianceViolator]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Violators' }})
    
