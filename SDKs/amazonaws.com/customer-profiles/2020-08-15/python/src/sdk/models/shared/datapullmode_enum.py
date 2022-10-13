from dataclasses import dataclass, field
from typing import Enum

class DataPullModeEnum(str, Enum):
    INCREMENTAL = "Incremental"
    COMPLETE = "Complete"

