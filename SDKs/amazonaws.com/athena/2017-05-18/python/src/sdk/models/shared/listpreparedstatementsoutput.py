from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import preparedstatementsummary


@dataclass_json
@dataclass
class ListPreparedStatementsOutput:
    next_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'NextToken' }})
    prepared_statements: Optional[List[preparedstatementsummary.PreparedStatementSummary]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'PreparedStatements' }})
    
