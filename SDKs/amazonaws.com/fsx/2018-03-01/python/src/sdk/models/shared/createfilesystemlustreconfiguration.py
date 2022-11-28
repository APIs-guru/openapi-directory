from dataclasses import dataclass, field
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class CreateFileSystemLustreConfiguration:
    r"""CreateFileSystemLustreConfiguration
    The Lustre configuration for the file system being created. 
    """
    
    auto_import_policy: Optional[AutoImportPolicyTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('AutoImportPolicy') }})
    automatic_backup_retention_days: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('AutomaticBackupRetentionDays') }})
    copy_tags_to_backups: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('CopyTagsToBackups') }})
    daily_automatic_backup_start_time: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('DailyAutomaticBackupStartTime') }})
    data_compression_type: Optional[DataCompressionTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('DataCompressionType') }})
    deployment_type: Optional[LustreDeploymentTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('DeploymentType') }})
    drive_cache_type: Optional[DriveCacheTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('DriveCacheType') }})
    export_path: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ExportPath') }})
    import_path: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ImportPath') }})
    imported_file_chunk_size: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ImportedFileChunkSize') }})
    per_unit_storage_throughput: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('PerUnitStorageThroughput') }})
    weekly_maintenance_start_time: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('WeeklyMaintenanceStartTime') }})
    
