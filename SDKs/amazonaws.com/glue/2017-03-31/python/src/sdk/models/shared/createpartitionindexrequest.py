from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class CreatePartitionIndexRequest:
    database_name: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('DatabaseName') }})
    partition_index: PartitionIndex = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('PartitionIndex') }})
    table_name: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('TableName') }})
    catalog_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('CatalogId') }})
    
