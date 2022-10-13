from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import preparedstatement


@dataclass_json
@dataclass
class GetPreparedStatementOutput:
    prepared_statement: Optional[preparedstatement.PreparedStatement] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'PreparedStatement' }})
    
