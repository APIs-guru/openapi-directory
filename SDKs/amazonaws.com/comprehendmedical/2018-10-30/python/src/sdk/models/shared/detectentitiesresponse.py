from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import entity
from . import unmappedattribute


@dataclass_json
@dataclass
class DetectEntitiesResponse:
    entities: List[entity.Entity] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Entities' }})
    model_version: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ModelVersion' }})
    pagination_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'PaginationToken' }})
    unmapped_attributes: Optional[List[unmappedattribute.UnmappedAttribute]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'UnmappedAttributes' }})
    
