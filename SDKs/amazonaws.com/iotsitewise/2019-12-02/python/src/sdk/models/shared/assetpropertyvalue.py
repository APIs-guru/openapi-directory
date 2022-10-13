from dataclasses import dataclass, field
from typing import Enum,Optional
from dataclasses_json import dataclass_json
from . import quality_enum
from . import timeinnanos
from . import variant


@dataclass_json
@dataclass
class AssetPropertyValue:
    quality: Optional[quality_enum.QualityEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'quality' }})
    timestamp: timeinnanos.TimeInNanos = field(default=None, metadata={'dataclasses_json': { 'field_name': 'timestamp' }})
    value: variant.Variant = field(default=None, metadata={'dataclasses_json': { 'field_name': 'value' }})
    
