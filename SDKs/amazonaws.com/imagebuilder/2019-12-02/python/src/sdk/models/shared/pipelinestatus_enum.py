from dataclasses import dataclass, field
from typing import Enum

class PipelineStatusEnum(str, Enum):
    DISABLED = "DISABLED"
    ENABLED = "ENABLED"

