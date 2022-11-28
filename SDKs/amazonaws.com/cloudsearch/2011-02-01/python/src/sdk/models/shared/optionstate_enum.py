from dataclasses import dataclass, field
from enum import Enum

class OptionStateEnum(str, Enum):
    REQUIRES_INDEX_DOCUMENTS = "RequiresIndexDocuments"
    PROCESSING = "Processing"
    ACTIVE = "Active"

