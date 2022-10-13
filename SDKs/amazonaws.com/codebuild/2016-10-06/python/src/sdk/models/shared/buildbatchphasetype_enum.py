from dataclasses import dataclass, field
from typing import Enum

class BuildBatchPhaseTypeEnum(str, Enum):
    SUBMITTED = "SUBMITTED"
    DOWNLOAD_BATCHSPEC = "DOWNLOAD_BATCHSPEC"
    IN_PROGRESS = "IN_PROGRESS"
    COMBINE_ARTIFACTS = "COMBINE_ARTIFACTS"
    SUCCEEDED = "SUCCEEDED"
    FAILED = "FAILED"
    STOPPED = "STOPPED"

