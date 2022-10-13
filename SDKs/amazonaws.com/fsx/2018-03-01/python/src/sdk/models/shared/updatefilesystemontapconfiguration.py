from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class UpdateFileSystemOntapConfiguration:
    automatic_backup_retention_days: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'AutomaticBackupRetentionDays' }})
    daily_automatic_backup_start_time: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'DailyAutomaticBackupStartTime' }})
    fsx_admin_password: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'FsxAdminPassword' }})
    weekly_maintenance_start_time: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'WeeklyMaintenanceStartTime' }})
    
