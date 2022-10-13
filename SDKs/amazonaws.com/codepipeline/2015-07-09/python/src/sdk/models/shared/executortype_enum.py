from dataclasses import dataclass, field
from typing import Enum

class ExecutorTypeEnum(str, Enum):
    JOB_WORKER = "JobWorker"
    LAMBDA = "Lambda"

