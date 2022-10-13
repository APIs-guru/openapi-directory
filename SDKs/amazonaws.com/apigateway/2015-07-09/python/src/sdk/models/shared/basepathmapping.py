from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class BasePathMapping:
    base_path: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'basePath' }})
    rest_api_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'restApiId' }})
    stage: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'stage' }})
    
