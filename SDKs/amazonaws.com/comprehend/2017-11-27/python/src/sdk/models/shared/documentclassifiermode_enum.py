from dataclasses import dataclass, field
from enum import Enum

class DocumentClassifierModeEnum(str, Enum):
    MULTI_CLASS = "MULTI_CLASS"
    MULTI_LABEL = "MULTI_LABEL"

