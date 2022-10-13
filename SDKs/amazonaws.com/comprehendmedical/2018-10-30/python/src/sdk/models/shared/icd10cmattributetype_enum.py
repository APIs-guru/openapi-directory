from dataclasses import dataclass, field
from typing import Enum

class Icd10CmAttributeTypeEnum(str, Enum):
    ACUITY = "ACUITY"
    DIRECTION = "DIRECTION"
    SYSTEM_ORGAN_SITE = "SYSTEM_ORGAN_SITE"
    QUALITY = "QUALITY"
    QUANTITY = "QUANTITY"
    TIME_TO_DX_NAME = "TIME_TO_DX_NAME"
    TIME_EXPRESSION = "TIME_EXPRESSION"

