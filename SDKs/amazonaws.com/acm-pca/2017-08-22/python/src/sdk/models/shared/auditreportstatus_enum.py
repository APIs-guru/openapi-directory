from dataclasses import dataclass, field
from typing import Enum

class AuditReportStatusEnum(str, Enum):
    CREATING = "CREATING"
    SUCCESS = "SUCCESS"
    FAILED = "FAILED"

