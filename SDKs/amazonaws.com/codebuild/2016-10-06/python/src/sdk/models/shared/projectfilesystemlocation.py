from dataclasses import dataclass, field
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class ProjectFileSystemLocation:
    r"""ProjectFileSystemLocation
     Information about a file system created by Amazon Elastic File System (EFS). For more information, see <a href=\"https://docs.aws.amazon.com/efs/latest/ug/whatisefs.html\">What Is Amazon Elastic File System?</a> 
    """
    
    identifier: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('identifier') }})
    location: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('location') }})
    mount_options: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('mountOptions') }})
    mount_point: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('mountPoint') }})
    type: Optional[FileSystemTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('type') }})
    
