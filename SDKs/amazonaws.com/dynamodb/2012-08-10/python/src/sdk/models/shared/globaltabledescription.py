from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import List,Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class GlobalTableDescription:
    r"""GlobalTableDescription
    Contains details about the global table.
    """
    
    creation_date_time: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('CreationDateTime'), 'encoder': utils.datetimeisoformat(True), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    global_table_arn: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('GlobalTableArn') }})
    global_table_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('GlobalTableName') }})
    global_table_status: Optional[GlobalTableStatusEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('GlobalTableStatus') }})
    replication_group: Optional[List[ReplicaDescription]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ReplicationGroup') }})
    
