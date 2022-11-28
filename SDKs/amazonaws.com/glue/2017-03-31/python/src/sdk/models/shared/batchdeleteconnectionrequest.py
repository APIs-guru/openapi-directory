from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class BatchDeleteConnectionRequest:
    connection_name_list: List[str] = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('ConnectionNameList') }})
    catalog_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('CatalogId') }})
    
