from dataclasses import dataclass, field
from typing import Enum,Optional
from dataclasses_json import dataclass_json
from . import imagebuilderstatechangereasoncode_enum


@dataclass_json
@dataclass
class ImageBuilderStateChangeReason:
    code: Optional[imagebuilderstatechangereasoncode_enum.ImageBuilderStateChangeReasonCodeEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Code' }})
    message: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Message' }})
    
