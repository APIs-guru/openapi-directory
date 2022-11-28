from dataclasses import dataclass, field
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class WindowsAuditLogCreateConfiguration:
    r"""WindowsAuditLogCreateConfiguration
    The Windows file access auditing configuration used when creating or updating an Amazon FSx for Windows File Server file system.
    """
    
    file_access_audit_log_level: WindowsAccessAuditLogLevelEnum = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('FileAccessAuditLogLevel') }})
    file_share_access_audit_log_level: WindowsAccessAuditLogLevelEnum = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('FileShareAccessAuditLogLevel') }})
    audit_log_destination: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('AuditLogDestination') }})
    
