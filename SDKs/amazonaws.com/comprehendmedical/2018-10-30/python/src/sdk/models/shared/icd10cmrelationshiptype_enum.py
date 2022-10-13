from dataclasses import dataclass, field
from typing import Enum

class Icd10CmRelationshipTypeEnum(str, Enum):
    OVERLAP = "OVERLAP"
    SYSTEM_ORGAN_SITE = "SYSTEM_ORGAN_SITE"

