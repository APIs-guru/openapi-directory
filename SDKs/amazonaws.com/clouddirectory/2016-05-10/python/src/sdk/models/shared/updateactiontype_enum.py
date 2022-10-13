from dataclasses import dataclass, field
from typing import Enum

class UpdateActionTypeEnum(str, Enum):
    CREATE_OR_UPDATE = "CREATE_OR_UPDATE"
    DELETE = "DELETE"

