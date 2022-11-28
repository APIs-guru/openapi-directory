from dataclasses import dataclass, field
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class BackupPolicy:
    r"""BackupPolicy
    The backup policy for the file system used to create automatic daily backups. If status has a value of <code>ENABLED</code>, the file system is being automatically backed up. For more information, see <a href=\"https://docs.aws.amazon.com/efs/latest/ug/awsbackup.html#automatic-backups\">Automatic backups</a>.
    """
    
    status: StatusEnum = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('Status') }})
    
