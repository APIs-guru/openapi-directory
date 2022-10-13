from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import code
from . import toolchain


@dataclass_json
@dataclass
class CreateProjectRequest:
    client_request_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'clientRequestToken' }})
    description: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'description' }})
    id: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'id' }})
    name: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'name' }})
    source_code: Optional[List[code.Code]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'sourceCode' }})
    tags: Optional[dict[str, str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'tags' }})
    toolchain: Optional[toolchain.Toolchain] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'toolchain' }})
    
