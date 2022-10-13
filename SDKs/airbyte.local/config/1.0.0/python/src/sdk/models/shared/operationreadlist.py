from dataclasses import dataclass, field
from typing import List
from dataclasses_json import dataclass_json
from . import operationread


@dataclass_json
@dataclass
class OperationReadList:
    operations: List[operationread.OperationRead] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'operations' }})
    
