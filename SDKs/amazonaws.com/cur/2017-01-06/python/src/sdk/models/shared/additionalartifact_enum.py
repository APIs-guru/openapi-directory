from dataclasses import dataclass, field
from enum import Enum

class AdditionalArtifactEnum(str, Enum):
    REDSHIFT = "REDSHIFT"
    QUICKSIGHT = "QUICKSIGHT"
    ATHENA = "ATHENA"

