from dataclasses import dataclass, field
from typing import Enum

class RxNormEntityTypeEnum(str, Enum):
    BRAND_NAME = "BRAND_NAME"
    GENERIC_NAME = "GENERIC_NAME"

