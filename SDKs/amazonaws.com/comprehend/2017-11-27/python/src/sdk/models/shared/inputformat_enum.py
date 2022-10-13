from dataclasses import dataclass, field
from typing import Enum

class InputFormatEnum(str, Enum):
    ONE_DOC_PER_FILE = "ONE_DOC_PER_FILE"
    ONE_DOC_PER_LINE = "ONE_DOC_PER_LINE"

