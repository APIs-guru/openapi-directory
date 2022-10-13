from dataclasses import dataclass, field
from typing import Enum,List,Optional
from dataclasses_json import dataclass_json
from . import windowsauditlogcreateconfiguration
from . import windowsdeploymenttype_enum
from . import selfmanagedactivedirectoryconfiguration


@dataclass_json
@dataclass
class CreateFileSystemWindowsConfiguration:
    active_directory_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ActiveDirectoryId' }})
    aliases: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Aliases' }})
    audit_log_configuration: Optional[windowsauditlogcreateconfiguration.WindowsAuditLogCreateConfiguration] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'AuditLogConfiguration' }})
    automatic_backup_retention_days: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'AutomaticBackupRetentionDays' }})
    copy_tags_to_backups: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'CopyTagsToBackups' }})
    daily_automatic_backup_start_time: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'DailyAutomaticBackupStartTime' }})
    deployment_type: Optional[windowsdeploymenttype_enum.WindowsDeploymentTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'DeploymentType' }})
    preferred_subnet_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'PreferredSubnetId' }})
    self_managed_active_directory_configuration: Optional[selfmanagedactivedirectoryconfiguration.SelfManagedActiveDirectoryConfiguration] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'SelfManagedActiveDirectoryConfiguration' }})
    throughput_capacity: int = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ThroughputCapacity' }})
    weekly_maintenance_start_time: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'WeeklyMaintenanceStartTime' }})
    
