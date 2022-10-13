from dataclasses import dataclass, field
from typing import Enum

class MigrationTypeValueEnum(str, Enum):
    FULL_LOAD = "full-load"
    CDC = "cdc"
    FULL_LOAD_AND_CDC = "full-load-and-cdc"

