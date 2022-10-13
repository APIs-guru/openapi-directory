from dataclasses import dataclass, field
from typing import Enum,Optional
from dataclasses_json import dataclass_json
from . import autoimportpolicytype_enum
from . import datacompressiontype_enum


@dataclass_json
@dataclass
class UpdateFileSystemLustreConfiguration:
    auto_import_policy: Optional[autoimportpolicytype_enum.AutoImportPolicyTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'AutoImportPolicy' }})
    automatic_backup_retention_days: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'AutomaticBackupRetentionDays' }})
    daily_automatic_backup_start_time: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'DailyAutomaticBackupStartTime' }})
    data_compression_type: Optional[datacompressiontype_enum.DataCompressionTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'DataCompressionType' }})
    weekly_maintenance_start_time: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'WeeklyMaintenanceStartTime' }})
    
