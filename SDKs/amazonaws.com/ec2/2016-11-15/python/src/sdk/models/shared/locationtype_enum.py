from dataclasses import dataclass, field
from enum import Enum

class LocationTypeEnum(str, Enum):
    REGION = "region"
    AVAILABILITY_ZONE = "availability-zone"
    AVAILABILITY_ZONE_ID = "availability-zone-id"

