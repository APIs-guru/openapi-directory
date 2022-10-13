from dataclasses import dataclass, field
from typing import Enum

class RetryBuildBatchTypeEnum(str, Enum):
    RETRY_ALL_BUILDS = "RETRY_ALL_BUILDS"
    RETRY_FAILED_BUILDS = "RETRY_FAILED_BUILDS"

