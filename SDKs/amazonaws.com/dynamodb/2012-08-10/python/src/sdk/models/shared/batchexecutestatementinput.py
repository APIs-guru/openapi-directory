from dataclasses import dataclass, field
from typing import List
from dataclasses_json import dataclass_json
from . import batchstatementrequest


@dataclass_json
@dataclass
class BatchExecuteStatementInput:
    statements: List[batchstatementrequest.BatchStatementRequest] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Statements' }})
    
