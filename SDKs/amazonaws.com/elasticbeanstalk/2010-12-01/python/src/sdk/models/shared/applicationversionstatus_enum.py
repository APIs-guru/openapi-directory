from dataclasses import dataclass, field
from enum import Enum

class ApplicationVersionStatusEnum(str, Enum):
    PROCESSED = "Processed"
    UNPROCESSED = "Unprocessed"
    FAILED = "Failed"
    PROCESSING = "Processing"
    BUILDING = "Building"

