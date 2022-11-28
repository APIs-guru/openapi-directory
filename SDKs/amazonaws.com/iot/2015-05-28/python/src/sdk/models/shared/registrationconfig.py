from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class RegistrationConfig:
    r"""RegistrationConfig
    The registration configuration.
    """
    
    role_arn: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('roleArn') }})
    template_body: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('templateBody') }})
    
