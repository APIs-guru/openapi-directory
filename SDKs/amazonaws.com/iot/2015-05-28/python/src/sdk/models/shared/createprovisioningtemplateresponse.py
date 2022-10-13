from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class CreateProvisioningTemplateResponse:
    default_version_id: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'defaultVersionId' }})
    template_arn: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'templateArn' }})
    template_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'templateName' }})
    
