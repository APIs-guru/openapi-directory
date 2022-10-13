from dataclasses import dataclass, field
from typing import Enum,Optional
from dataclasses_json import dataclass_json
from . import windowsaccessauditloglevel_enum
from . import windowsaccessauditloglevel_enum


@dataclass_json
@dataclass
class WindowsAuditLogCreateConfiguration:
    audit_log_destination: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'AuditLogDestination' }})
    file_access_audit_log_level: windowsaccessauditloglevel_enum.WindowsAccessAuditLogLevelEnum = field(default=None, metadata={'dataclasses_json': { 'field_name': 'FileAccessAuditLogLevel' }})
    file_share_access_audit_log_level: windowsaccessauditloglevel_enum.WindowsAccessAuditLogLevelEnum = field(default=None, metadata={'dataclasses_json': { 'field_name': 'FileShareAccessAuditLogLevel' }})
    
