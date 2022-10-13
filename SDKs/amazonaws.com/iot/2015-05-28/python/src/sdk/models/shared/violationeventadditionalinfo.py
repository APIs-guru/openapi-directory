from dataclasses import dataclass, field
from typing import Enum,Optional
from dataclasses_json import dataclass_json
from . import confidencelevel_enum


@dataclass_json
@dataclass
class ViolationEventAdditionalInfo:
    confidence_level: Optional[confidencelevel_enum.ConfidenceLevelEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'confidenceLevel' }})
    
