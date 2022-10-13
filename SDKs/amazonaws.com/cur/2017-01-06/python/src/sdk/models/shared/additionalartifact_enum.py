from dataclasses import dataclass, field
from typing import Enum

class AdditionalArtifactEnum(str, Enum):
    REDSHIFT = "REDSHIFT"
    QUICKSIGHT = "QUICKSIGHT"
    ATHENA = "ATHENA"

