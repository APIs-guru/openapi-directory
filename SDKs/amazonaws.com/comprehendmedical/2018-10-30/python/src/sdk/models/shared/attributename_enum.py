from dataclasses import dataclass, field
from typing import Enum

class AttributeNameEnum(str, Enum):
    SIGN = "SIGN"
    SYMPTOM = "SYMPTOM"
    DIAGNOSIS = "DIAGNOSIS"
    NEGATION = "NEGATION"

