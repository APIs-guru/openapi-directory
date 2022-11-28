from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class CreateProvisioningTemplateVersionResponse:
    is_default_version: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('isDefaultVersion') }})
    template_arn: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('templateArn') }})
    template_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('templateName') }})
    version_id: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('versionId') }})
    
