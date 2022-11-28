from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class RequestUploadCredentialsOutput:
    r"""RequestUploadCredentialsOutput
    Represents the returned data in response to a request operation.
    """
    
    storage_location: Optional[S3Location] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('StorageLocation') }})
    upload_credentials: Optional[AwsCredentials] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('UploadCredentials') }})
    
