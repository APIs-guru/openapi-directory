from dataclasses import dataclass, field
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class Options:
    r"""Options
    <p>Represents the options that are available to control the behavior of a <a href=\"https://docs.aws.amazon.com/datasync/latest/userguide/API_StartTaskExecution.html\">StartTaskExecution</a> operation. Behavior includes preserving metadata such as user ID (UID), group ID (GID), and file permissions, and also overwriting files in the destination, data integrity verification, and so on.</p> <p>A task has a set of default options associated with it. If you don't specify an option in <a href=\"https://docs.aws.amazon.com/datasync/latest/userguide/API_StartTaskExecution.html\">StartTaskExecution</a>, the default value is used. You can override the defaults options on each task execution by specifying an overriding <code>Options</code> value to <a href=\"https://docs.aws.amazon.com/datasync/latest/userguide/API_StartTaskExecution.html\">StartTaskExecution</a>.</p>
    """
    
    atime: Optional[AtimeEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Atime') }})
    bytes_per_second: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('BytesPerSecond') }})
    gid: Optional[GidEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Gid') }})
    log_level: Optional[LogLevelEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('LogLevel') }})
    mtime: Optional[MtimeEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Mtime') }})
    overwrite_mode: Optional[OverwriteModeEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('OverwriteMode') }})
    posix_permissions: Optional[PosixPermissionsEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('PosixPermissions') }})
    preserve_deleted_files: Optional[PreserveDeletedFilesEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('PreserveDeletedFiles') }})
    preserve_devices: Optional[PreserveDevicesEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('PreserveDevices') }})
    security_descriptor_copy_flags: Optional[SmbSecurityDescriptorCopyFlagsEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('SecurityDescriptorCopyFlags') }})
    task_queueing: Optional[TaskQueueingEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('TaskQueueing') }})
    transfer_mode: Optional[TransferModeEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('TransferMode') }})
    uid: Optional[UIDEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Uid') }})
    verify_mode: Optional[VerifyModeEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('VerifyMode') }})
    
