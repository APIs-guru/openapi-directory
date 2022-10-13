from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import resultset


@dataclass_json
@dataclass
class GetQueryResultsOutput:
    next_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'NextToken' }})
    result_set: Optional[resultset.ResultSet] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ResultSet' }})
    update_count: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'UpdateCount' }})
    
