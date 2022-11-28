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
class DatastoreSummary:
    r"""DatastoreSummary
    A summary of information about a data store.
    """
    
    creation_time: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('creationTime'), 'encoder': utils.datetimeisoformat(True), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    datastore_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('datastoreName') }})
    datastore_partitions: Optional[DatastorePartitions] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('datastorePartitions') }})
    datastore_storage: Optional[DatastoreStorageSummary] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('datastoreStorage') }})
    file_format_type: Optional[FileFormatTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('fileFormatType') }})
    last_message_arrival_time: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('lastMessageArrivalTime'), 'encoder': utils.datetimeisoformat(True), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    last_update_time: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('lastUpdateTime'), 'encoder': utils.datetimeisoformat(True), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    status: Optional[DatastoreStatusEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('status') }})
    
