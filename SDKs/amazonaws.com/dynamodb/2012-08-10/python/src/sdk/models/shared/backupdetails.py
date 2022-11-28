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
class BackupDetails:
    r"""BackupDetails
    Contains the details of the backup created for the table.
    """
    
    backup_arn: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('BackupArn') }})
    backup_creation_date_time: datetime = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('BackupCreationDateTime'), 'encoder': utils.datetimeisoformat(False), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    backup_name: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('BackupName') }})
    backup_status: BackupStatusEnum = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('BackupStatus') }})
    backup_type: BackupTypeEnum = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('BackupType') }})
    backup_expiry_date_time: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('BackupExpiryDateTime'), 'encoder': utils.datetimeisoformat(True), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    backup_size_bytes: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('BackupSizeBytes') }})
    
