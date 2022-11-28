from dataclasses import dataclass, field
from enum import Enum

class DocumentReadModeEnum(str, Enum):
    SERVICE_DEFAULT = "SERVICE_DEFAULT"
    FORCE_DOCUMENT_READ_ACTION = "FORCE_DOCUMENT_READ_ACTION"

