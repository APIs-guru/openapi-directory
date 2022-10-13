from dataclasses import dataclass, field
from typing import Enum

class UploadStatusEnum(str, Enum):
    INITIALIZED = "INITIALIZED"
    PROCESSING = "PROCESSING"
    SUCCEEDED = "SUCCEEDED"
    FAILED = "FAILED"

