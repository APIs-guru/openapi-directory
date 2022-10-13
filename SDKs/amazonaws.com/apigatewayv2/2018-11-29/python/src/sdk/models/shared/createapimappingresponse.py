from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class CreateAPIMappingResponse:
    api_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ApiId' }})
    api_mapping_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ApiMappingId' }})
    api_mapping_key: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ApiMappingKey' }})
    stage: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Stage' }})
    
