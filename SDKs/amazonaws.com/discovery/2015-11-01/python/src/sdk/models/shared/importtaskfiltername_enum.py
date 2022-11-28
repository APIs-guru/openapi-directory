from dataclasses import dataclass, field
from enum import Enum

class ImportTaskFilterNameEnum(str, Enum):
    IMPORT_TASK_ID = "IMPORT_TASK_ID"
    STATUS = "STATUS"
    NAME = "NAME"

