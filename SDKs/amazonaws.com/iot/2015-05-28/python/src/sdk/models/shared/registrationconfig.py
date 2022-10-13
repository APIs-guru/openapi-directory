from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class RegistrationConfig:
    role_arn: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'roleArn' }})
    template_body: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'templateBody' }})
    
