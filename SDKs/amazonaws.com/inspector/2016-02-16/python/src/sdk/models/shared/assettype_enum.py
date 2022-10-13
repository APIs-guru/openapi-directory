from dataclasses import dataclass, field
from typing import Enum

class AssetTypeEnum(str, Enum):
    EC2_INSTANCE = "ec2-instance"

