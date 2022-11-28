from dataclasses import dataclass, field
from enum import Enum

class AuditReportResponseFormatEnum(str, Enum):
    JSON = "JSON"
    CSV = "CSV"

