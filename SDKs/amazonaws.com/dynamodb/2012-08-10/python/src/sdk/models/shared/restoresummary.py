from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class RestoreSummary:
    r"""RestoreSummary
    Contains details for the restore.
    """
    
    restore_date_time: datetime = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('RestoreDateTime'), 'encoder': utils.datetimeisoformat(False), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    restore_in_progress: bool = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('RestoreInProgress') }})
    source_backup_arn: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('SourceBackupArn') }})
    source_table_arn: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('SourceTableArn') }})
    
