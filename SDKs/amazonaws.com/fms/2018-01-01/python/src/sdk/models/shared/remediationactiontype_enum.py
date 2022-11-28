from dataclasses import dataclass, field
from enum import Enum

class RemediationActionTypeEnum(str, Enum):
    REMOVE = "REMOVE"
    MODIFY = "MODIFY"

