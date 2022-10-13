from dataclasses import dataclass, field
from typing import Enum

class EndpointTypeEnum(str, Enum):
    PUBLIC = "PUBLIC"
    PRIVATE_LINK = "PRIVATE_LINK"
    FIPS = "FIPS"

