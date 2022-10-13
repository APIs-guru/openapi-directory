from dataclasses import dataclass, field
from typing import Enum,Optional
from dataclasses_json import dataclass_json
from . import datacompressiontype_enum
from . import datarepositoryconfiguration
from . import lustredeploymenttype_enum
from . import drivecachetype_enum


@dataclass_json
@dataclass
class LustreFileSystemConfiguration:
    automatic_backup_retention_days: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'AutomaticBackupRetentionDays' }})
    copy_tags_to_backups: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'CopyTagsToBackups' }})
    daily_automatic_backup_start_time: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'DailyAutomaticBackupStartTime' }})
    data_compression_type: Optional[datacompressiontype_enum.DataCompressionTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'DataCompressionType' }})
    data_repository_configuration: Optional[datarepositoryconfiguration.DataRepositoryConfiguration] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'DataRepositoryConfiguration' }})
    deployment_type: Optional[lustredeploymenttype_enum.LustreDeploymentTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'DeploymentType' }})
    drive_cache_type: Optional[drivecachetype_enum.DriveCacheTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'DriveCacheType' }})
    mount_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'MountName' }})
    per_unit_storage_throughput: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'PerUnitStorageThroughput' }})
    weekly_maintenance_start_time: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'WeeklyMaintenanceStartTime' }})
    
