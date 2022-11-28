from dataclasses import dataclass, field
from enum import Enum

class InputFormatEnum(str, Enum):
    ONE_DOC_PER_FILE = "ONE_DOC_PER_FILE"
    ONE_DOC_PER_LINE = "ONE_DOC_PER_LINE"

