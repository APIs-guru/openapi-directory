from dataclasses import dataclass, field
from datetime import datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class ApprovalRuleTemplate:
    approval_rule_template_content: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'approvalRuleTemplateContent' }})
    approval_rule_template_description: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'approvalRuleTemplateDescription' }})
    approval_rule_template_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'approvalRuleTemplateId' }})
    approval_rule_template_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'approvalRuleTemplateName' }})
    creation_date: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'creationDate', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    last_modified_date: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'lastModifiedDate', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    last_modified_user: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'lastModifiedUser' }})
    rule_content_sha256: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ruleContentSha256' }})
    
