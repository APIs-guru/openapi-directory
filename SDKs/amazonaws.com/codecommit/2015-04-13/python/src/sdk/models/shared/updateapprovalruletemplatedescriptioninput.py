from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class UpdateApprovalRuleTemplateDescriptionInput:
    approval_rule_template_description: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('approvalRuleTemplateDescription') }})
    approval_rule_template_name: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('approvalRuleTemplateName') }})
    
