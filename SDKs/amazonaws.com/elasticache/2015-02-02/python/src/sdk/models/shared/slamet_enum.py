from dataclasses import dataclass, field
from enum import Enum

class SLAMetEnum(str, Enum):
    YES = "yes"
    NO = "no"
    N_A = "n/a"

