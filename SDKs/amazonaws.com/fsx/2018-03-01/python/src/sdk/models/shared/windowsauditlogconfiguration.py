from dataclasses import dataclass, field
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class WindowsAuditLogConfiguration:
    r"""WindowsAuditLogConfiguration
    The configuration that Amazon FSx for Windows File Server uses to audit and log user accesses of files, folders, and file shares on the Amazon FSx for Windows File Server file system. For more information, see <a href=\"https://docs.aws.amazon.com/fsx/latest/WindowsGuide/file-access-auditing.html\"> File access auditing</a>.
    """
    
    file_access_audit_log_level: WindowsAccessAuditLogLevelEnum = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('FileAccessAuditLogLevel') }})
    file_share_access_audit_log_level: WindowsAccessAuditLogLevelEnum = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('FileShareAccessAuditLogLevel') }})
    audit_log_destination: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('AuditLogDestination') }})
    
