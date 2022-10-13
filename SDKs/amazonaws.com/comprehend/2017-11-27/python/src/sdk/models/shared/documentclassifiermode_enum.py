from dataclasses import dataclass, field
from typing import Enum

class DocumentClassifierModeEnum(str, Enum):
    MULTI_CLASS = "MULTI_CLASS"
    MULTI_LABEL = "MULTI_LABEL"

