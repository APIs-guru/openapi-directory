from dataclasses import dataclass, field
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class EfsVolumeConfiguration:
    r"""EfsVolumeConfiguration
    This is used when you're using an Amazon Elastic File System file system for job storage. For more information, see <a href=\"https://docs.aws.amazon.com/batch/latest/userguide/efs-volumes.html\">Amazon EFS Volumes</a> in the <i>Batch User Guide</i>.
    """
    
    file_system_id: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('fileSystemId') }})
    authorization_config: Optional[EfsAuthorizationConfig] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('authorizationConfig') }})
    root_directory: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('rootDirectory') }})
    transit_encryption: Optional[EfsTransitEncryptionEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('transitEncryption') }})
    transit_encryption_port: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('transitEncryptionPort') }})
    
