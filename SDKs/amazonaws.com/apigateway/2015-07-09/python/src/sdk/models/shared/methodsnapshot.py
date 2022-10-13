from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class MethodSnapshot:
    api_key_required: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'apiKeyRequired' }})
    authorization_type: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'authorizationType' }})
    
