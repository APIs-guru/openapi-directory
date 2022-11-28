from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class DatastorePartitions:
    r"""DatastorePartitions
     Contains information about the partition dimensions in a data store. 
    """
    
    partitions: Optional[List[DatastorePartition]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('partitions') }})
    
