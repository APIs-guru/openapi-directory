from dataclasses import dataclass, field
from enum import Enum

class DocumentClassifierDataFormatEnum(str, Enum):
    COMPREHEND_CSV = "COMPREHEND_CSV"
    AUGMENTED_MANIFEST = "AUGMENTED_MANIFEST"

