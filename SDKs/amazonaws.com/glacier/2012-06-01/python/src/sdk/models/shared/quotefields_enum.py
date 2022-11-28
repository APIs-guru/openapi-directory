from dataclasses import dataclass, field
from enum import Enum

class QuoteFieldsEnum(str, Enum):
    ALWAYS = "ALWAYS"
    ASNEEDED = "ASNEEDED"

