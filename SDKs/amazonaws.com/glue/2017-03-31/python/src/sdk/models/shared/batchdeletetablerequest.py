from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class BatchDeleteTableRequest:
    database_name: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('DatabaseName') }})
    tables_to_delete: List[str] = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('TablesToDelete') }})
    catalog_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('CatalogId') }})
    
