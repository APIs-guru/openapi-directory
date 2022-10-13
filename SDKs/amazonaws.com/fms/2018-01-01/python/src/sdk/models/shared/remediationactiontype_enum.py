from dataclasses import dataclass, field
from typing import Enum

class RemediationActionTypeEnum(str, Enum):
    REMOVE = "REMOVE"
    MODIFY = "MODIFY"

