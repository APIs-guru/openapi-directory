from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import windowsauditlogcreateconfiguration
from . import selfmanagedactivedirectoryconfigurationupdates


@dataclass_json
@dataclass
class UpdateFileSystemWindowsConfiguration:
    audit_log_configuration: Optional[windowsauditlogcreateconfiguration.WindowsAuditLogCreateConfiguration] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'AuditLogConfiguration' }})
    automatic_backup_retention_days: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'AutomaticBackupRetentionDays' }})
    daily_automatic_backup_start_time: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'DailyAutomaticBackupStartTime' }})
    self_managed_active_directory_configuration: Optional[selfmanagedactivedirectoryconfigurationupdates.SelfManagedActiveDirectoryConfigurationUpdates] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'SelfManagedActiveDirectoryConfiguration' }})
    throughput_capacity: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ThroughputCapacity' }})
    weekly_maintenance_start_time: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'WeeklyMaintenanceStartTime' }})
    
