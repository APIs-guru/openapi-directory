from dataclasses import dataclass, field
from typing import Enum

class ImportTaskFilterNameEnum(str, Enum):
    IMPORT_TASK_ID = "IMPORT_TASK_ID"
    STATUS = "STATUS"
    NAME = "NAME"

