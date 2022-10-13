from dataclasses import dataclass, field
from typing import Enum

class EvaluationMethodEnum(str, Enum):
    BATCH = "BATCH"
    SERIAL = "SERIAL"

