from dataclasses import dataclass, field
from typing import Enum,Optional
from dataclasses_json import dataclass_json
from . import documentationparttype_enum


@dataclass_json
@dataclass
class DocumentationPartLocation:
    method: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'method' }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'name' }})
    path: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'path' }})
    status_code: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'statusCode' }})
    type: documentationparttype_enum.DocumentationPartTypeEnum = field(default=None, metadata={'dataclasses_json': { 'field_name': 'type' }})
    
