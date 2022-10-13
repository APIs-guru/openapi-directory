from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class SetUICustomizationRequest:
    css: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'CSS' }})
    client_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ClientId' }})
    image_file: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ImageFile' }})
    user_pool_id: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'UserPoolId' }})
    
