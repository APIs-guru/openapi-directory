from dataclasses import dataclass, field
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class InstallToRemoteAccessSessionRequest:
    r"""InstallToRemoteAccessSessionRequest
    Represents the request to install an Android application (in .apk format) or an iOS application (in .ipa format) as part of a remote access session.
    """
    
    app_arn: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('appArn') }})
    remote_access_session_arn: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('remoteAccessSessionArn') }})
    
