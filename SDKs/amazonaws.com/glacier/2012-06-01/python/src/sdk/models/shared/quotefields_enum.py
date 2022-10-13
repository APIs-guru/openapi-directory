from dataclasses import dataclass, field
from typing import Enum

class QuoteFieldsEnum(str, Enum):
    ALWAYS = "ALWAYS"
    ASNEEDED = "ASNEEDED"

