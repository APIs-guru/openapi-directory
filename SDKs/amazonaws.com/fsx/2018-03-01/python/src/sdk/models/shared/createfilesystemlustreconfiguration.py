from dataclasses import dataclass, field
from typing import Enum,Optional
from dataclasses_json import dataclass_json
from . import autoimportpolicytype_enum
from . import datacompressiontype_enum
from . import lustredeploymenttype_enum
from . import drivecachetype_enum


@dataclass_json
@dataclass
class CreateFileSystemLustreConfiguration:
    auto_import_policy: Optional[autoimportpolicytype_enum.AutoImportPolicyTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'AutoImportPolicy' }})
    automatic_backup_retention_days: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'AutomaticBackupRetentionDays' }})
    copy_tags_to_backups: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'CopyTagsToBackups' }})
    daily_automatic_backup_start_time: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'DailyAutomaticBackupStartTime' }})
    data_compression_type: Optional[datacompressiontype_enum.DataCompressionTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'DataCompressionType' }})
    deployment_type: Optional[lustredeploymenttype_enum.LustreDeploymentTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'DeploymentType' }})
    drive_cache_type: Optional[drivecachetype_enum.DriveCacheTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'DriveCacheType' }})
    export_path: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ExportPath' }})
    import_path: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ImportPath' }})
    imported_file_chunk_size: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ImportedFileChunkSize' }})
    per_unit_storage_throughput: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'PerUnitStorageThroughput' }})
    weekly_maintenance_start_time: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'WeeklyMaintenanceStartTime' }})
    
