from dataclasses import dataclass, field
from typing import Enum,List,Optional
from dataclasses_json import dataclass_json
from . import alias
from . import windowsauditlogconfiguration
from . import windowsdeploymenttype_enum
from . import filesystemmaintenanceoperation_enum
from . import selfmanagedactivedirectoryattributes


@dataclass_json
@dataclass
class WindowsFileSystemConfiguration:
    active_directory_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ActiveDirectoryId' }})
    aliases: Optional[List[alias.Alias]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Aliases' }})
    audit_log_configuration: Optional[windowsauditlogconfiguration.WindowsAuditLogConfiguration] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'AuditLogConfiguration' }})
    automatic_backup_retention_days: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'AutomaticBackupRetentionDays' }})
    copy_tags_to_backups: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'CopyTagsToBackups' }})
    daily_automatic_backup_start_time: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'DailyAutomaticBackupStartTime' }})
    deployment_type: Optional[windowsdeploymenttype_enum.WindowsDeploymentTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'DeploymentType' }})
    maintenance_operations_in_progress: Optional[List[filesystemmaintenanceoperation_enum.FileSystemMaintenanceOperationEnum]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'MaintenanceOperationsInProgress' }})
    preferred_file_server_ip: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'PreferredFileServerIp' }})
    preferred_subnet_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'PreferredSubnetId' }})
    remote_administration_endpoint: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'RemoteAdministrationEndpoint' }})
    self_managed_active_directory_configuration: Optional[selfmanagedactivedirectoryattributes.SelfManagedActiveDirectoryAttributes] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'SelfManagedActiveDirectoryConfiguration' }})
    throughput_capacity: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ThroughputCapacity' }})
    weekly_maintenance_start_time: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'WeeklyMaintenanceStartTime' }})
    
