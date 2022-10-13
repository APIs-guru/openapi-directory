from dataclasses import dataclass, field
from datetime import datetime
from marshmallow import fields
import dateutil.parser
from typing import Enum,Optional
from dataclasses_json import dataclass_json
from . import datastorepartitions
from . import datastorestoragesummary
from . import fileformattype_enum
from . import datastorestatus_enum


@dataclass_json
@dataclass
class DatastoreSummary:
    creation_time: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'creationTime', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    datastore_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'datastoreName' }})
    datastore_partitions: Optional[datastorepartitions.DatastorePartitions] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'datastorePartitions' }})
    datastore_storage: Optional[datastorestoragesummary.DatastoreStorageSummary] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'datastoreStorage' }})
    file_format_type: Optional[fileformattype_enum.FileFormatTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'fileFormatType' }})
    last_message_arrival_time: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'lastMessageArrivalTime', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    last_update_time: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'lastUpdateTime', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    status: Optional[datastorestatus_enum.DatastoreStatusEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'status' }})
    
