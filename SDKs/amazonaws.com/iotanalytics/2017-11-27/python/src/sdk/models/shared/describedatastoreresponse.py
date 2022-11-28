from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class DescribeDatastoreResponse:
    datastore: Optional[Datastore] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('datastore') }})
    statistics: Optional[DatastoreStatistics] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('statistics') }})
    
