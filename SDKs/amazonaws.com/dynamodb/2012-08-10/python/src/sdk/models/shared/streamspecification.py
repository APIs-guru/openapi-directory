from dataclasses import dataclass, field
from typing import Enum,Optional
from dataclasses_json import dataclass_json
from . import streamviewtype_enum


@dataclass_json
@dataclass
class StreamSpecification:
    stream_enabled: bool = field(default=None, metadata={'dataclasses_json': { 'field_name': 'StreamEnabled' }})
    stream_view_type: Optional[streamviewtype_enum.StreamViewTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'StreamViewType' }})
    
