from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class GlobalTable:
    r"""GlobalTable
    Represents the properties of a global table.
    """
    
    global_table_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('GlobalTableName') }})
    replication_group: Optional[List[Replica]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ReplicationGroup') }})
    
