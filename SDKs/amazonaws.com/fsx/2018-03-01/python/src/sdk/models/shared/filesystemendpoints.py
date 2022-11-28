from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class FileSystemEndpoints:
    r"""FileSystemEndpoints
    An Amazon FSx for NetApp ONTAP file system has the following endpoints that are used to access data or to manage the file system using the NetApp ONTAP CLI, REST API, or NetApp SnapMirror.
    """
    
    intercluster: Optional[FileSystemEndpoint] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Intercluster') }})
    management: Optional[FileSystemEndpoint] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Management') }})
    
