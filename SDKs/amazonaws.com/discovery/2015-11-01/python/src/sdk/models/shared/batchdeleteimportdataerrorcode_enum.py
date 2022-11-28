from dataclasses import dataclass, field
from enum import Enum

class BatchDeleteImportDataErrorCodeEnum(str, Enum):
    NOT_FOUND = "NOT_FOUND"
    INTERNAL_SERVER_ERROR = "INTERNAL_SERVER_ERROR"
    OVER_LIMIT = "OVER_LIMIT"

