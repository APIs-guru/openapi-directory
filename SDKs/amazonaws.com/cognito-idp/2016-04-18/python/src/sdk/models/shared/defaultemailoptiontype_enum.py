from dataclasses import dataclass, field
from enum import Enum

class DefaultEmailOptionTypeEnum(str, Enum):
    CONFIRM_WITH_LINK = "CONFIRM_WITH_LINK"
    CONFIRM_WITH_CODE = "CONFIRM_WITH_CODE"

