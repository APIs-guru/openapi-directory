from dataclasses import dataclass, field
from enum import Enum

class RefreshSchemasStatusTypeValueEnum(str, Enum):
    SUCCESSFUL = "successful"
    FAILED = "failed"
    REFRESHING = "refreshing"

