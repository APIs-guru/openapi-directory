from dataclasses import dataclass, field
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class DeletePreparedStatementInput:
    statement_name: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'StatementName' }})
    work_group: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'WorkGroup' }})
    
