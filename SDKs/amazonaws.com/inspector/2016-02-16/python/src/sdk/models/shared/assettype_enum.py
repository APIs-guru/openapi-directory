from dataclasses import dataclass, field
from enum import Enum

class AssetTypeEnum(str, Enum):
    EC2_INSTANCE = "ec2-instance"

