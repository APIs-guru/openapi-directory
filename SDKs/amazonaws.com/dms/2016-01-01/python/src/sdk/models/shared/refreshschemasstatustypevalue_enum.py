from dataclasses import dataclass, field
from typing import Enum

class RefreshSchemasStatusTypeValueEnum(str, Enum):
    SUCCESSFUL = "successful"
    FAILED = "failed"
    REFRESHING = "refreshing"

