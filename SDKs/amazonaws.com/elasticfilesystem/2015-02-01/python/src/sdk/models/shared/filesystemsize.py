from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class FileSystemSize:
    r"""FileSystemSize
    The latest known metered size (in bytes) of data stored in the file system, in its <code>Value</code> field, and the time at which that size was determined in its <code>Timestamp</code> field. The value doesn't represent the size of a consistent snapshot of the file system, but it is eventually consistent when there are no writes to the file system. That is, the value represents the actual size only if the file system is not modified for a period longer than a couple of hours. Otherwise, the value is not necessarily the exact size the file system was at any instant in time.
    """
    
    value: int = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('Value') }})
    timestamp: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Timestamp'), 'encoder': utils.datetimeisoformat(True), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    value_in_ia: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ValueInIA') }})
    value_in_standard: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ValueInStandard') }})
    
