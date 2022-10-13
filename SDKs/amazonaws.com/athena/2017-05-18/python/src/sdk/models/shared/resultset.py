from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import resultsetmetadata
from . import row


@dataclass_json
@dataclass
class ResultSet:
    result_set_metadata: Optional[resultsetmetadata.ResultSetMetadata] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ResultSetMetadata' }})
    rows: Optional[List[row.Row]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Rows' }})
    
