from dataclasses import dataclass, field
from typing import List
from dataclasses_json import dataclass_json
from . import columnmetadata
from . import resultrow


@dataclass_json
@dataclass
class ResultSet:
    headers: List[columnmetadata.ColumnMetadata] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'headers' }})
    rows: List[resultrow.ResultRow] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'rows' }})
    
