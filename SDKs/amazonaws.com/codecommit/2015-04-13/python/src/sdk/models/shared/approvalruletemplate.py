from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class ApprovalRuleTemplate:
    r"""ApprovalRuleTemplate
    Returns information about an approval rule template.
    """
    
    approval_rule_template_content: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('approvalRuleTemplateContent') }})
    approval_rule_template_description: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('approvalRuleTemplateDescription') }})
    approval_rule_template_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('approvalRuleTemplateId') }})
    approval_rule_template_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('approvalRuleTemplateName') }})
    creation_date: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('creationDate'), 'encoder': utils.datetimeisoformat(True), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    last_modified_date: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('lastModifiedDate'), 'encoder': utils.datetimeisoformat(True), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    last_modified_user: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('lastModifiedUser') }})
    rule_content_sha256: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ruleContentSha256') }})
    
