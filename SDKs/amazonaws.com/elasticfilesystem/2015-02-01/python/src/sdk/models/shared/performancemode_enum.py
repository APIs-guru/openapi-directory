from dataclasses import dataclass, field
from typing import Enum

class PerformanceModeEnum(str, Enum):
    GENERAL_PURPOSE = "generalPurpose"
    MAX_IO = "maxIO"

