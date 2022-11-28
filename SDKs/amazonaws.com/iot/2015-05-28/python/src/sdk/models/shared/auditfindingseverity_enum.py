from dataclasses import dataclass, field
from enum import Enum

class AuditFindingSeverityEnum(str, Enum):
    CRITICAL = "CRITICAL"
    HIGH = "HIGH"
    MEDIUM = "MEDIUM"
    LOW = "LOW"

