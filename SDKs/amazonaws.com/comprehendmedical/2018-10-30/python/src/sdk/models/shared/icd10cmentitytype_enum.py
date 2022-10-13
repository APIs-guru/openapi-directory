from dataclasses import dataclass, field
from typing import Enum

class Icd10CmEntityTypeEnum(str, Enum):
    DX_NAME = "DX_NAME"
    TIME_EXPRESSION = "TIME_EXPRESSION"

