from dataclasses import dataclass, field
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class FSxWindowsFileServerVolumeConfiguration:
    r"""FSxWindowsFileServerVolumeConfiguration
    <p>This parameter is specified when you are using <a href=\"https://docs.aws.amazon.com/fsx/latest/WindowsGuide/what-is.html\">Amazon FSx for Windows File Server</a> file system for task storage.</p> <p>For more information and the input format, see <a href=\"https://docs.aws.amazon.com/AmazonECS/latest/developerguide/wfsx-volumes.html\">Amazon FSx for Windows File Server Volumes</a> in the <i>Amazon Elastic Container Service Developer Guide</i>.</p>
    """
    
    authorization_config: FSxWindowsFileServerAuthorizationConfig = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('authorizationConfig') }})
    file_system_id: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('fileSystemId') }})
    root_directory: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('rootDirectory') }})
    
