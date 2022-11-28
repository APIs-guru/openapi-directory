from dataclasses import dataclass, field
from enum import Enum

class Icd10CmTraitNameEnum(str, Enum):
    NEGATION = "NEGATION"
    DIAGNOSIS = "DIAGNOSIS"
    SIGN = "SIGN"
    SYMPTOM = "SYMPTOM"

