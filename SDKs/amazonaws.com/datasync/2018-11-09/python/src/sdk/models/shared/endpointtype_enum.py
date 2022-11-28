from dataclasses import dataclass, field
from enum import Enum

class EndpointTypeEnum(str, Enum):
    PUBLIC = "PUBLIC"
    PRIVATE_LINK = "PRIVATE_LINK"
    FIPS = "FIPS"

