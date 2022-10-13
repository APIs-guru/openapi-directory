from dataclasses import dataclass, field
from typing import Enum

class PiiEntitiesDetectionModeEnum(str, Enum):
    ONLY_REDACTION = "ONLY_REDACTION"
    ONLY_OFFSETS = "ONLY_OFFSETS"

