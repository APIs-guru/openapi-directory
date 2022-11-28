from dataclasses import dataclass, field
from enum import Enum

class DestinationTypeEnum(str, Enum):
    IPV4 = "IPV4"
    IPV6 = "IPV6"
    PREFIX_LIST = "PREFIX_LIST"

