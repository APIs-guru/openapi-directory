from dataclasses import dataclass, field
from typing import List
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class CreateGlobalTableInput:
    global_table_name: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('GlobalTableName') }})
    replication_group: List[Replica] = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('ReplicationGroup') }})
    
