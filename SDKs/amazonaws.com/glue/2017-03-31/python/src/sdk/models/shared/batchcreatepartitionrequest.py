from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import partitioninput


@dataclass_json
@dataclass
class BatchCreatePartitionRequest:
    catalog_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'CatalogId' }})
    database_name: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'DatabaseName' }})
    partition_input_list: List[partitioninput.PartitionInput] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'PartitionInputList' }})
    table_name: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'TableName' }})
    
