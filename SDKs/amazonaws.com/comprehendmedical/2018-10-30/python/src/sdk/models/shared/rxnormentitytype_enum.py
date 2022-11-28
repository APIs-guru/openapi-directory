from dataclasses import dataclass, field
from enum import Enum

class RxNormEntityTypeEnum(str, Enum):
    BRAND_NAME = "BRAND_NAME"
    GENERIC_NAME = "GENERIC_NAME"

