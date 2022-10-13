from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import partitionindexdescriptor


@dataclass_json
@dataclass
class GetPartitionIndexesResponse:
    next_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'NextToken' }})
    partition_index_descriptor_list: Optional[List[partitionindexdescriptor.PartitionIndexDescriptor]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'PartitionIndexDescriptorList' }})
    
