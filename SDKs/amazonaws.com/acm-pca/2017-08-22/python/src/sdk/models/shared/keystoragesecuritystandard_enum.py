from dataclasses import dataclass, field
from enum import Enum

class KeyStorageSecurityStandardEnum(str, Enum):
    FIPS_140_2_LEVEL_2_OR_HIGHER = "FIPS_140_2_LEVEL_2_OR_HIGHER"
    FIPS_140_2_LEVEL_3_OR_HIGHER = "FIPS_140_2_LEVEL_3_OR_HIGHER"

