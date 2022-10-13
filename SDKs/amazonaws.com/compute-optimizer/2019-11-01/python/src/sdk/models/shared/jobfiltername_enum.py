from dataclasses import dataclass, field
from typing import Enum

class JobFilterNameEnum(str, Enum):
    RESOURCE_TYPE = "ResourceType"
    JOB_STATUS = "JobStatus"

