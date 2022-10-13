from dataclasses import dataclass, field
from datetime import datetime
from marshmallow import fields
import dateutil.parser
from typing import Enum,Optional
from dataclasses_json import dataclass_json
from . import datastorepartitions
from . import fileformatconfiguration
from . import retentionperiod
from . import datastorestatus_enum
from . import datastorestorage


@dataclass_json
@dataclass
class Datastore:
    arn: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'arn' }})
    creation_time: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'creationTime', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    datastore_partitions: Optional[datastorepartitions.DatastorePartitions] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'datastorePartitions' }})
    file_format_configuration: Optional[fileformatconfiguration.FileFormatConfiguration] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'fileFormatConfiguration' }})
    last_message_arrival_time: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'lastMessageArrivalTime', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    last_update_time: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'lastUpdateTime', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'name' }})
    retention_period: Optional[retentionperiod.RetentionPeriod] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'retentionPeriod' }})
    status: Optional[datastorestatus_enum.DatastoreStatusEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'status' }})
    storage: Optional[datastorestorage.DatastoreStorage] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'storage' }})
    
