from dataclasses import dataclass, field
from typing import Enum,Optional
from dataclasses_json import dataclass_json
from . import layeravailability_enum


@dataclass_json
@dataclass
class Layer:
    layer_availability: Optional[layeravailability_enum.LayerAvailabilityEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'layerAvailability' }})
    layer_digest: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'layerDigest' }})
    layer_size: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'layerSize' }})
    media_type: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'mediaType' }})
    
