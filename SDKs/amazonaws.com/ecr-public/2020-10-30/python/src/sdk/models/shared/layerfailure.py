from dataclasses import dataclass, field
from typing import Enum,Optional
from dataclasses_json import dataclass_json
from . import layerfailurecode_enum


@dataclass_json
@dataclass
class LayerFailure:
    failure_code: Optional[layerfailurecode_enum.LayerFailureCodeEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'failureCode' }})
    failure_reason: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'failureReason' }})
    layer_digest: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'layerDigest' }})
    
