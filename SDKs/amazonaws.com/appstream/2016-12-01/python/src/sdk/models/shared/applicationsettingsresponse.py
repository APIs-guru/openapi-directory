from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class ApplicationSettingsResponse:
    r"""ApplicationSettingsResponse
    Describes the persistent application settings for users of a stack.
    """
    
    enabled: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Enabled') }})
    s3_bucket_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('S3BucketName') }})
    settings_group: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('SettingsGroup') }})
    
