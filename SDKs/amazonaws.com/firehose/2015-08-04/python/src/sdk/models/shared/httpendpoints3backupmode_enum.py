from dataclasses import dataclass, field
from typing import Enum

class HTTPEndpointS3BackupModeEnum(str, Enum):
    FAILED_DATA_ONLY = "FailedDataOnly"
    ALL_DATA = "AllData"

