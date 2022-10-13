from dataclasses import dataclass, field
from typing import Enum

class RecordTypeEnum(str, Enum):
    CNAME = "CNAME"

