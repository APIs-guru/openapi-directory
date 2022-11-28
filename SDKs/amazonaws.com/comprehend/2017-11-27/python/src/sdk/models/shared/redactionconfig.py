from dataclasses import dataclass, field
from typing import List,Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class RedactionConfig:
    r"""RedactionConfig
    Provides configuration parameters for PII entity redaction.
    """
    
    mask_character: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('MaskCharacter') }})
    mask_mode: Optional[PiiEntitiesDetectionMaskModeEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('MaskMode') }})
    pii_entity_types: Optional[List[PiiEntityTypeEnum]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('PiiEntityTypes') }})
    
