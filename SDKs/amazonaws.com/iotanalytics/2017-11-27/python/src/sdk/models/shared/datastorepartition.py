from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class DatastorePartition:
    r"""DatastorePartition
     A single dimension to partition a data store. The dimension must be an <code>AttributePartition</code> or a <code>TimestampPartition</code>. 
    """
    
    attribute_partition: Optional[Partition] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('attributePartition') }})
    timestamp_partition: Optional[TimestampPartition] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('timestampPartition') }})
    
