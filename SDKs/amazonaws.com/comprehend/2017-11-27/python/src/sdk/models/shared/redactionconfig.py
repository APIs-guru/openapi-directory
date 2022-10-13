from dataclasses import dataclass, field
from typing import Enum,List,Optional
from dataclasses_json import dataclass_json
from . import piientitiesdetectionmaskmode_enum
from . import piientitytype_enum


@dataclass_json
@dataclass
class RedactionConfig:
    mask_character: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'MaskCharacter' }})
    mask_mode: Optional[piientitiesdetectionmaskmode_enum.PiiEntitiesDetectionMaskModeEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'MaskMode' }})
    pii_entity_types: Optional[List[piientitytype_enum.PiiEntityTypeEnum]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'PiiEntityTypes' }})
    
