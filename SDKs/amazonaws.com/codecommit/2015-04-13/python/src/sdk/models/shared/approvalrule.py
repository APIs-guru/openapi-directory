from dataclasses import dataclass, field
from datetime import datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from dataclasses_json import dataclass_json
from . import originapprovalruletemplate


@dataclass_json
@dataclass
class ApprovalRule:
    approval_rule_content: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'approvalRuleContent' }})
    approval_rule_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'approvalRuleId' }})
    approval_rule_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'approvalRuleName' }})
    creation_date: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'creationDate', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    last_modified_date: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'lastModifiedDate', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    last_modified_user: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'lastModifiedUser' }})
    origin_approval_rule_template: Optional[originapprovalruletemplate.OriginApprovalRuleTemplate] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'originApprovalRuleTemplate' }})
    rule_content_sha256: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ruleContentSha256' }})
    
