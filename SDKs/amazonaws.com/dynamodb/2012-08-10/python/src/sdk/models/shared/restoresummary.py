from dataclasses import dataclass, field
from datetime import datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class RestoreSummary:
    restore_date_time: datetime = field(default=None, metadata={'dataclasses_json': { 'field_name': 'RestoreDateTime', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    restore_in_progress: bool = field(default=None, metadata={'dataclasses_json': { 'field_name': 'RestoreInProgress' }})
    source_backup_arn: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'SourceBackupArn' }})
    source_table_arn: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'SourceTableArn' }})
    
