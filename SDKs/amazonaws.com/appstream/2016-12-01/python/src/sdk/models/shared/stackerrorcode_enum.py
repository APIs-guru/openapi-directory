from dataclasses import dataclass, field
from enum import Enum

class StackErrorCodeEnum(str, Enum):
    STORAGE_CONNECTOR_ERROR = "STORAGE_CONNECTOR_ERROR"
    INTERNAL_SERVICE_ERROR = "INTERNAL_SERVICE_ERROR"

