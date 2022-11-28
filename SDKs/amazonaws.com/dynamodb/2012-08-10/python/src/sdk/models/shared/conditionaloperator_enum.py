from dataclasses import dataclass, field
from enum import Enum

class ConditionalOperatorEnum(str, Enum):
    AND = "AND"
    OR = "OR"

