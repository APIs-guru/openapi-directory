from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import rxnormentity


@dataclass_json
@dataclass
class InferRxNormResponse:
    entities: List[rxnormentity.RxNormEntity] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Entities' }})
    model_version: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ModelVersion' }})
    pagination_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'PaginationToken' }})
    
