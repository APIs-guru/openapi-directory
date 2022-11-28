from dataclasses import dataclass, field
from enum import Enum

class AttributeNameEnum(str, Enum):
    SIGN = "SIGN"
    SYMPTOM = "SYMPTOM"
    DIAGNOSIS = "DIAGNOSIS"
    NEGATION = "NEGATION"

