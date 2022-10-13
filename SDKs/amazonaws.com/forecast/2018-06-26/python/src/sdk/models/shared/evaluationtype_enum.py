from dataclasses import dataclass, field
from typing import Enum

class EvaluationTypeEnum(str, Enum):
    SUMMARY = "SUMMARY"
    COMPUTED = "COMPUTED"

