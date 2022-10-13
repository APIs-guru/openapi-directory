from dataclasses import dataclass, field
from typing import Enum

class PiiEntitiesDetectionMaskModeEnum(str, Enum):
    MASK = "MASK"
    REPLACE_WITH_PII_ENTITY_TYPE = "REPLACE_WITH_PII_ENTITY_TYPE"

