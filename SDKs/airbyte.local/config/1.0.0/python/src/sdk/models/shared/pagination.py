from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class Pagination:
    page_size: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'pageSize' }})
    row_offset: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'rowOffset' }})
    
