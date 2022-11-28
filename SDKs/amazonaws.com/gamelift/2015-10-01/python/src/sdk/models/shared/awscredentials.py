from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class AwsCredentials:
    r"""AwsCredentials
    Temporary access credentials used for uploading game build files to Amazon GameLift. They are valid for a limited time. If they expire before you upload your game build, get a new set by calling <a>RequestUploadCredentials</a>.
    """
    
    access_key_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('AccessKeyId') }})
    secret_access_key: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('SecretAccessKey') }})
    session_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('SessionToken') }})
    
