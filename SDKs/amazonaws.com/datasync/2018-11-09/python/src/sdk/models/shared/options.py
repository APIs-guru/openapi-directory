from dataclasses import dataclass, field
from typing import Enum,Optional
from dataclasses_json import dataclass_json
from . import atime_enum
from . import gid_enum
from . import loglevel_enum
from . import mtime_enum
from . import overwritemode_enum
from . import posixpermissions_enum
from . import preservedeletedfiles_enum
from . import preservedevices_enum
from . import smbsecuritydescriptorcopyflags_enum
from . import taskqueueing_enum
from . import transfermode_enum
from . import uid_enum
from . import verifymode_enum


@dataclass_json
@dataclass
class Options:
    atime: Optional[atime_enum.AtimeEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Atime' }})
    bytes_per_second: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'BytesPerSecond' }})
    gid: Optional[gid_enum.GidEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Gid' }})
    log_level: Optional[loglevel_enum.LogLevelEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'LogLevel' }})
    mtime: Optional[mtime_enum.MtimeEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Mtime' }})
    overwrite_mode: Optional[overwritemode_enum.OverwriteModeEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'OverwriteMode' }})
    posix_permissions: Optional[posixpermissions_enum.PosixPermissionsEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'PosixPermissions' }})
    preserve_deleted_files: Optional[preservedeletedfiles_enum.PreserveDeletedFilesEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'PreserveDeletedFiles' }})
    preserve_devices: Optional[preservedevices_enum.PreserveDevicesEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'PreserveDevices' }})
    security_descriptor_copy_flags: Optional[smbsecuritydescriptorcopyflags_enum.SmbSecurityDescriptorCopyFlagsEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'SecurityDescriptorCopyFlags' }})
    task_queueing: Optional[taskqueueing_enum.TaskQueueingEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'TaskQueueing' }})
    transfer_mode: Optional[transfermode_enum.TransferModeEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'TransferMode' }})
    uid: Optional[uid_enum.UIDEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Uid' }})
    verify_mode: Optional[verifymode_enum.VerifyModeEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'VerifyMode' }})
    
