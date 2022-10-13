from dataclasses import dataclass, field
from typing import Enum

class ReloadOptionValueEnum(str, Enum):
    DATA_RELOAD = "data-reload"
    VALIDATE_ONLY = "validate-only"

