from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class GetPartitionIndexesResponse:
    next_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('NextToken') }})
    partition_index_descriptor_list: Optional[List[PartitionIndexDescriptor]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('PartitionIndexDescriptorList') }})
    
