from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class UpdateFileSystemOntapConfiguration:
    r"""UpdateFileSystemOntapConfiguration
    The configuration updates for an Amazon FSx for NetApp ONTAP file system.
    """
    
    automatic_backup_retention_days: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('AutomaticBackupRetentionDays') }})
    daily_automatic_backup_start_time: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('DailyAutomaticBackupStartTime') }})
    fsx_admin_password: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('FsxAdminPassword') }})
    weekly_maintenance_start_time: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('WeeklyMaintenanceStartTime') }})
    
