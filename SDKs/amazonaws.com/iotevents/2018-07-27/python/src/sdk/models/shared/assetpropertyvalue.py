from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import assetpropertytimestamp
from . import assetpropertyvariant


@dataclass_json
@dataclass
class AssetPropertyValue:
    quality: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'quality' }})
    timestamp: Optional[assetpropertytimestamp.AssetPropertyTimestamp] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'timestamp' }})
    value: Optional[assetpropertyvariant.AssetPropertyVariant] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'value' }})
    
