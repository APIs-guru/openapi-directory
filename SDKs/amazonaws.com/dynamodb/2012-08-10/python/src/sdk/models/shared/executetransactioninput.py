from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import parameterizedstatement


@dataclass_json
@dataclass
class ExecuteTransactionInput:
    client_request_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ClientRequestToken' }})
    transact_statements: List[parameterizedstatement.ParameterizedStatement] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'TransactStatements' }})
    
