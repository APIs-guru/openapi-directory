from dataclasses import dataclass, field
from enum import Enum

class DataPullModeEnum(str, Enum):
    INCREMENTAL = "Incremental"
    COMPLETE = "Complete"

