from dataclasses import dataclass, field
from typing import Enum,Optional
from dataclasses_json import dataclass_json
from . import sourceauthtype_enum


@dataclass_json
@dataclass
class SourceAuth:
    resource: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'resource' }})
    type: sourceauthtype_enum.SourceAuthTypeEnum = field(default=None, metadata={'dataclasses_json': { 'field_name': 'type' }})
    
