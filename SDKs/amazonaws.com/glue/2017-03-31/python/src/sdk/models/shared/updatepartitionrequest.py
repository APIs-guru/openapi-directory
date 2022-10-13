from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import partitioninput


@dataclass_json
@dataclass
class UpdatePartitionRequest:
    catalog_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'CatalogId' }})
    database_name: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'DatabaseName' }})
    partition_input: partitioninput.PartitionInput = field(default=None, metadata={'dataclasses_json': { 'field_name': 'PartitionInput' }})
    partition_value_list: List[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'PartitionValueList' }})
    table_name: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'TableName' }})
    
