from dataclasses import dataclass, field
from typing import Enum

class ReportPackagingTypeEnum(str, Enum):
    ZIP = "ZIP"
    NONE = "NONE"

