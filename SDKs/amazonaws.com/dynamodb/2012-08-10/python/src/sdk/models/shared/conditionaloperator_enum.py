from dataclasses import dataclass, field
from typing import Enum

class ConditionalOperatorEnum(str, Enum):
    AND = "AND"
    OR = "OR"

