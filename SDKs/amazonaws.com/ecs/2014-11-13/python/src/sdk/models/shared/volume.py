from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class Volume:
    r"""Volume
    A data volume used in a task definition. For tasks that use the Amazon Elastic File System (Amazon EFS), specify an <code>efsVolumeConfiguration</code>. For Windows tasks that use Amazon FSx for Windows File Server file system, specify a <code>fsxWindowsFileServerVolumeConfiguration</code>. For tasks that use a Docker volume, specify a <code>DockerVolumeConfiguration</code>. For tasks that use a bind mount host volume, specify a <code>host</code> and optional <code>sourcePath</code>. For more information, see <a href=\"https://docs.aws.amazon.com/AmazonECS/latest/developerguide/using_data_volumes.html\">Using Data Volumes in Tasks</a>.
    """
    
    docker_volume_configuration: Optional[DockerVolumeConfiguration] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('dockerVolumeConfiguration') }})
    efs_volume_configuration: Optional[EfsVolumeConfiguration] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('efsVolumeConfiguration') }})
    fsx_windows_file_server_volume_configuration: Optional[FSxWindowsFileServerVolumeConfiguration] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('fsxWindowsFileServerVolumeConfiguration') }})
    host: Optional[HostVolumeProperties] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('host') }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    
