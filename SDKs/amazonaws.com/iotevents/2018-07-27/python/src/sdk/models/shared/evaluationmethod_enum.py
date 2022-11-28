from dataclasses import dataclass, field
from enum import Enum

class EvaluationMethodEnum(str, Enum):
    BATCH = "BATCH"
    SERIAL = "SERIAL"

