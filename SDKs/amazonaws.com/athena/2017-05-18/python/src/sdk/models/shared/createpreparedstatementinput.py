from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class CreatePreparedStatementInput:
    description: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Description' }})
    query_statement: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'QueryStatement' }})
    statement_name: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'StatementName' }})
    work_group: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'WorkGroup' }})
    
