from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class LambdaActivity:
    batch_size: int = field(default=None, metadata={'dataclasses_json': { 'field_name': 'batchSize' }})
    lambda_name: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'lambdaName' }})
    name: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'name' }})
    next: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'next' }})
    
