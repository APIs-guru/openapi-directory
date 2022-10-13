from dataclasses import dataclass, field
from typing import Enum,Optional
from dataclasses_json import dataclass_json
from . import loacontenttype_enum


@dataclass_json
@dataclass
class Loa:
    loa_content: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'loaContent' }})
    loa_content_type: Optional[loacontenttype_enum.LoaContentTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'loaContentType' }})
    
