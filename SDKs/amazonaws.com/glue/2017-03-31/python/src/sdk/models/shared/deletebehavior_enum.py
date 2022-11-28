from dataclasses import dataclass, field
from enum import Enum

class DeleteBehaviorEnum(str, Enum):
    LOG = "LOG"
    DELETE_FROM_DATABASE = "DELETE_FROM_DATABASE"
    DEPRECATE_IN_DATABASE = "DEPRECATE_IN_DATABASE"

