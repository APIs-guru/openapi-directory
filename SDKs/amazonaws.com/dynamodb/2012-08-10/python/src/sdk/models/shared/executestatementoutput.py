from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import attributevalue


@dataclass_json
@dataclass
class ExecuteStatementOutput:
    items: Optional[List[dict[str, attributevalue.AttributeValue]]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Items' }})
    next_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'NextToken' }})
    
