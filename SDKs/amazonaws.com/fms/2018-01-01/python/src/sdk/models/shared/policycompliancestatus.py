from dataclasses import dataclass, field
from datetime import datetime
from marshmallow import fields
import dateutil.parser
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import evaluationresult


@dataclass_json
@dataclass
class PolicyComplianceStatus:
    evaluation_results: Optional[List[evaluationresult.EvaluationResult]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'EvaluationResults' }})
    issue_info_map: Optional[dict[str, str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'IssueInfoMap' }})
    last_updated: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'LastUpdated', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    member_account: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'MemberAccount' }})
    policy_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'PolicyId' }})
    policy_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'PolicyName' }})
    policy_owner: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'PolicyOwner' }})
    
