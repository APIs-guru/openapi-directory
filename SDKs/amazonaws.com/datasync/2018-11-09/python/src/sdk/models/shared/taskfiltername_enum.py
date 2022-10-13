from dataclasses import dataclass, field
from typing import Enum

class TaskFilterNameEnum(str, Enum):
    LOCATION_ID = "LocationId"
    CREATION_TIME = "CreationTime"

