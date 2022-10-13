from dataclasses import dataclass, field
from typing import Enum

class AddressFamilyEnum(str, Enum):
    IPV4 = "ipv4"
    IPV6 = "ipv6"

