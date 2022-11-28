from dataclasses import dataclass, field
from enum import Enum

class AccountAttributeNameEnum(str, Enum):
    SUPPORTED_PLATFORMS = "supported-platforms"
    DEFAULT_VPC = "default-vpc"

