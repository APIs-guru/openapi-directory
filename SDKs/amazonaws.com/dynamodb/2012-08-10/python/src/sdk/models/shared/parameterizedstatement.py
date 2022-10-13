from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import attributevalue


@dataclass_json
@dataclass
class ParameterizedStatement:
    parameters: Optional[List[attributevalue.AttributeValue]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Parameters' }})
    statement: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Statement' }})
    
