from dataclasses import dataclass, field
from typing import Enum

class SchemaDiffTypeEnum(str, Enum):
    SYNTAX_DIFF = "SYNTAX_DIFF"

