from dataclasses import dataclass, field
from typing import List
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class PartitionIndex:
    r"""PartitionIndex
    A structure for a partition index.
    """
    
    index_name: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('IndexName') }})
    keys: List[str] = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('Keys') }})
    
