from dataclasses import dataclass, field
from enum import Enum

class SubnetCidrReservationTypeEnum(str, Enum):
    PREFIX = "prefix"
    EXPLICIT = "explicit"

