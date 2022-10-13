from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class UnprocessedQueryExecutionID:
    error_code: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ErrorCode' }})
    error_message: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ErrorMessage' }})
    query_execution_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'QueryExecutionId' }})
    
