from dataclasses import dataclass, field
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class LustreFileSystemConfiguration:
    r"""LustreFileSystemConfiguration
    The configuration for the Amazon FSx for Lustre file system.
    """
    
    automatic_backup_retention_days: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('AutomaticBackupRetentionDays') }})
    copy_tags_to_backups: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('CopyTagsToBackups') }})
    daily_automatic_backup_start_time: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('DailyAutomaticBackupStartTime') }})
    data_compression_type: Optional[DataCompressionTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('DataCompressionType') }})
    data_repository_configuration: Optional[DataRepositoryConfiguration] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('DataRepositoryConfiguration') }})
    deployment_type: Optional[LustreDeploymentTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('DeploymentType') }})
    drive_cache_type: Optional[DriveCacheTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('DriveCacheType') }})
    mount_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('MountName') }})
    per_unit_storage_throughput: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('PerUnitStorageThroughput') }})
    weekly_maintenance_start_time: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('WeeklyMaintenanceStartTime') }})
    
