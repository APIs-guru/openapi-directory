from dataclasses import dataclass, field
from typing import Enum

class AuditReportResponseFormatEnum(str, Enum):
    JSON = "JSON"
    CSV = "CSV"

