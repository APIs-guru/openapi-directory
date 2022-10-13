from dataclasses import dataclass, field
from typing import Enum

class LocationFilterNameEnum(str, Enum):
    LOCATION_URI = "LocationUri"
    LOCATION_TYPE = "LocationType"
    CREATION_TIME = "CreationTime"

