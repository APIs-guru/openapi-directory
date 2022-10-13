from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import attributevalue


@dataclass_json
@dataclass
class ExecuteStatementInput:
    consistent_read: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ConsistentRead' }})
    next_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'NextToken' }})
    parameters: Optional[List[attributevalue.AttributeValue]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Parameters' }})
    statement: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Statement' }})
    
