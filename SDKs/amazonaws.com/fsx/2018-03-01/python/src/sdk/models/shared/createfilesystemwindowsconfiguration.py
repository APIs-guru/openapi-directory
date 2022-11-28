from dataclasses import dataclass, field
from typing import List,Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class CreateFileSystemWindowsConfiguration:
    r"""CreateFileSystemWindowsConfiguration
    The configuration object for the Microsoft Windows file system used in <code>CreateFileSystem</code> and <code>CreateFileSystemFromBackup</code> operations.
    """
    
    throughput_capacity: int = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('ThroughputCapacity') }})
    active_directory_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ActiveDirectoryId') }})
    aliases: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Aliases') }})
    audit_log_configuration: Optional[WindowsAuditLogCreateConfiguration] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('AuditLogConfiguration') }})
    automatic_backup_retention_days: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('AutomaticBackupRetentionDays') }})
    copy_tags_to_backups: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('CopyTagsToBackups') }})
    daily_automatic_backup_start_time: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('DailyAutomaticBackupStartTime') }})
    deployment_type: Optional[WindowsDeploymentTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('DeploymentType') }})
    preferred_subnet_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('PreferredSubnetId') }})
    self_managed_active_directory_configuration: Optional[SelfManagedActiveDirectoryConfiguration] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('SelfManagedActiveDirectoryConfiguration') }})
    weekly_maintenance_start_time: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('WeeklyMaintenanceStartTime') }})
    
