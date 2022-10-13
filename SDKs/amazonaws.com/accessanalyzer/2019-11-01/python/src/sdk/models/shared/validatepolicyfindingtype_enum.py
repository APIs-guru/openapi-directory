from dataclasses import dataclass, field
from typing import Enum

class ValidatePolicyFindingTypeEnum(str, Enum):
    ERROR = "ERROR"
    SECURITY_WARNING = "SECURITY_WARNING"
    SUGGESTION = "SUGGESTION"
    WARNING = "WARNING"

