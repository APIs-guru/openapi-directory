from dataclasses import dataclass, field
from enum import Enum

class ReportPackagingTypeEnum(str, Enum):
    ZIP = "ZIP"
    NONE = "NONE"

