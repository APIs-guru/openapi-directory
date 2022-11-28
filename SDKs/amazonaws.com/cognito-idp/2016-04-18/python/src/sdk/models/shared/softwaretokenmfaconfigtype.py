from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class SoftwareTokenMfaConfigType:
    r"""SoftwareTokenMfaConfigType
    The type used for enabling software token MFA at the user pool level.
    """
    
    enabled: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Enabled') }})
    
