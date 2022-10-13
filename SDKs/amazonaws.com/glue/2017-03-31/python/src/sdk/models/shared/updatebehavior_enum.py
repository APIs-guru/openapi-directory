from dataclasses import dataclass, field
from typing import Enum

class UpdateBehaviorEnum(str, Enum):
    LOG = "LOG"
    UPDATE_IN_DATABASE = "UPDATE_IN_DATABASE"

