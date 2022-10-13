from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import batchstatementerror
from . import attributevalue


@dataclass_json
@dataclass
class BatchStatementResponse:
    error: Optional[batchstatementerror.BatchStatementError] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Error' }})
    item: Optional[dict[str, attributevalue.AttributeValue]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Item' }})
    table_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'TableName' }})
    
