from dataclasses import dataclass, field
from typing import List,Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class WindowsFileSystemConfiguration:
    r"""WindowsFileSystemConfiguration
    The configuration for this Microsoft Windows file system.
    """
    
    active_directory_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ActiveDirectoryId') }})
    aliases: Optional[List[Alias]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Aliases') }})
    audit_log_configuration: Optional[WindowsAuditLogConfiguration] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('AuditLogConfiguration') }})
    automatic_backup_retention_days: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('AutomaticBackupRetentionDays') }})
    copy_tags_to_backups: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('CopyTagsToBackups') }})
    daily_automatic_backup_start_time: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('DailyAutomaticBackupStartTime') }})
    deployment_type: Optional[WindowsDeploymentTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('DeploymentType') }})
    maintenance_operations_in_progress: Optional[List[FileSystemMaintenanceOperationEnum]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('MaintenanceOperationsInProgress') }})
    preferred_file_server_ip: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('PreferredFileServerIp') }})
    preferred_subnet_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('PreferredSubnetId') }})
    remote_administration_endpoint: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('RemoteAdministrationEndpoint') }})
    self_managed_active_directory_configuration: Optional[SelfManagedActiveDirectoryAttributes] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('SelfManagedActiveDirectoryConfiguration') }})
    throughput_capacity: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ThroughputCapacity') }})
    weekly_maintenance_start_time: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('WeeklyMaintenanceStartTime') }})
    
