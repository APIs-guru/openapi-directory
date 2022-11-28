from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class TableInput:
    r"""TableInput
    A structure used to define a table.
    """
    
    name: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('Name') }})
    description: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Description') }})
    last_access_time: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('LastAccessTime'), 'encoder': utils.datetimeisoformat(True), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    last_analyzed_time: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('LastAnalyzedTime'), 'encoder': utils.datetimeisoformat(True), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    owner: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Owner') }})
    parameters: Optional[dict[str, str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Parameters') }})
    partition_keys: Optional[List[Column]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('PartitionKeys') }})
    retention: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Retention') }})
    storage_descriptor: Optional[StorageDescriptor] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('StorageDescriptor') }})
    table_type: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('TableType') }})
    target_table: Optional[TableIdentifier] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('TargetTable') }})
    view_expanded_text: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ViewExpandedText') }})
    view_original_text: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ViewOriginalText') }})
    
