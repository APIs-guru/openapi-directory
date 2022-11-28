from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class AwsJobPresignedURLConfig:
    r"""AwsJobPresignedURLConfig
    Configuration information for pre-signed URLs. Valid when <code>protocols</code> contains HTTP.
    """
    
    expires_in_sec: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('expiresInSec') }})
    
