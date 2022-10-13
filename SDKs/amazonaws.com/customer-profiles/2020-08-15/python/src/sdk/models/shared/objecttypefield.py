from dataclasses import dataclass, field
from typing import Enum,Optional
from dataclasses_json import dataclass_json
from . import fieldcontenttype_enum


@dataclass_json
@dataclass
class ObjectTypeField:
    content_type: Optional[fieldcontenttype_enum.FieldContentTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ContentType' }})
    source: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Source' }})
    target: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Target' }})
    
