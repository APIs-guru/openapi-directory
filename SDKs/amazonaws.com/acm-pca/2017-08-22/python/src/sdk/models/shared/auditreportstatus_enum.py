from dataclasses import dataclass, field
from enum import Enum

class AuditReportStatusEnum(str, Enum):
    CREATING = "CREATING"
    SUCCESS = "SUCCESS"
    FAILED = "FAILED"

