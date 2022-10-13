from dataclasses import dataclass, field
from typing import Enum,Optional
from dataclasses_json import dataclass_json
from . import loacontenttype_enum


@dataclass_json
@dataclass
class DescribeInterconnectLoaRequest:
    interconnect_id: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'interconnectId' }})
    loa_content_type: Optional[loacontenttype_enum.LoaContentTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'loaContentType' }})
    provider_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'providerName' }})
    
