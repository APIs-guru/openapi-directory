from dataclasses import dataclass, field
from typing import List
from dataclasses_json import dataclass_json
from . import partitioninput


@dataclass_json
@dataclass
class BatchUpdatePartitionRequestEntry:
    partition_input: partitioninput.PartitionInput = field(default=None, metadata={'dataclasses_json': { 'field_name': 'PartitionInput' }})
    partition_value_list: List[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'PartitionValueList' }})
    
