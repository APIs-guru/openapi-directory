from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import entity


@dataclass_json
@dataclass
class DetectPhiResponse:
    entities: List[entity.Entity] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Entities' }})
    model_version: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ModelVersion' }})
    pagination_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'PaginationToken' }})
    
