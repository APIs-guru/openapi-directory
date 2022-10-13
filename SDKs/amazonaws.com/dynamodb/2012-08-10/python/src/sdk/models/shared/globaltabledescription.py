from dataclasses import dataclass, field
from datetime import datetime
from marshmallow import fields
import dateutil.parser
from typing import Enum,List,Optional
from dataclasses_json import dataclass_json
from . import globaltablestatus_enum
from . import replicadescription


@dataclass_json
@dataclass
class GlobalTableDescription:
    creation_date_time: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'CreationDateTime', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    global_table_arn: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'GlobalTableArn' }})
    global_table_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'GlobalTableName' }})
    global_table_status: Optional[globaltablestatus_enum.GlobalTableStatusEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'GlobalTableStatus' }})
    replication_group: Optional[List[replicadescription.ReplicaDescription]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ReplicationGroup' }})
    
