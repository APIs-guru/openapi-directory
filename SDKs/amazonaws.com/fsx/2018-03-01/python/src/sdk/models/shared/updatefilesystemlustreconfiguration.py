from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class UpdateFileSystemLustreConfiguration:
    r"""UpdateFileSystemLustreConfiguration
    The configuration object for Amazon FSx for Lustre file systems used in the <code>UpdateFileSystem</code> operation.
    """
    
    auto_import_policy: Optional[AutoImportPolicyTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('AutoImportPolicy') }})
    automatic_backup_retention_days: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('AutomaticBackupRetentionDays') }})
    daily_automatic_backup_start_time: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('DailyAutomaticBackupStartTime') }})
    data_compression_type: Optional[DataCompressionTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('DataCompressionType') }})
    weekly_maintenance_start_time: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('WeeklyMaintenanceStartTime') }})
    
