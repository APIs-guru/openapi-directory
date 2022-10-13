from dataclasses import dataclass, field
from typing import Enum

class EventTypeEnum(str, Enum):
    SYSTEM = "SYSTEM"
    CREATE_ACTION = "CREATE_ACTION"
    DELETE_ACTION = "DELETE_ACTION"
    UPDATE_ACTION = "UPDATE_ACTION"
    EXECUTE_ACTION = "EXECUTE_ACTION"

