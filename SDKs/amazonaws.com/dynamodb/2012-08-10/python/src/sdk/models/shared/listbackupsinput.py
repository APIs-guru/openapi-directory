from dataclasses import dataclass, field
from datetime import datetime
from marshmallow import fields
import dateutil.parser
from typing import Enum,List,Optional
from dataclasses_json import dataclass_json
from . import backuptypefilter_enum


@dataclass_json
@dataclass
class ListBackupsInput:
    backup_type: Optional[backuptypefilter_enum.BackupTypeFilterEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'BackupType' }})
    exclusive_start_backup_arn: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ExclusiveStartBackupArn' }})
    limit: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Limit' }})
    table_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'TableName' }})
    time_range_lower_bound: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'TimeRangeLowerBound', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    time_range_upper_bound: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'TimeRangeUpperBound', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    
