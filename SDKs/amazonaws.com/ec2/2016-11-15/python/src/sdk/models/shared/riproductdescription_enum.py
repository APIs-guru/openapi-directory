from dataclasses import dataclass, field
from enum import Enum

class RiProductDescriptionEnum(str, Enum):
    LINUX_UNIX = "Linux/UNIX"
    LINUX_UNIX_AMAZON_VPC_ = "Linux/UNIX (Amazon VPC)"
    WINDOWS = "Windows"
    WINDOWS_AMAZON_VPC_ = "Windows (Amazon VPC)"

