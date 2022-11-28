from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class CreateTableRequest:
    database_name: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('DatabaseName') }})
    table_input: TableInput = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('TableInput') }})
    catalog_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('CatalogId') }})
    partition_indexes: Optional[List[PartitionIndex]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('PartitionIndexes') }})
    
