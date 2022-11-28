from dataclasses import dataclass, field
from enum import Enum

class PipelineStatusEnum(str, Enum):
    DISABLED = "DISABLED"
    ENABLED = "ENABLED"

