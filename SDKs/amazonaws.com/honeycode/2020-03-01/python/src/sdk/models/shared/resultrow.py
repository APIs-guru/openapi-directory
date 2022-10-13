from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import dataitem


@dataclass_json
@dataclass
class ResultRow:
    data_items: List[dataitem.DataItem] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'dataItems' }})
    row_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'rowId' }})
    
