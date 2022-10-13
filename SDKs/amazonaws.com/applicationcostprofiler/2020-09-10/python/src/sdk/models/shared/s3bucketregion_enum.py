from dataclasses import dataclass, field
from typing import Enum

class S3BucketRegionEnum(str, Enum):
    AP_EAST_1 = "ap-east-1"
    ME_SOUTH_1 = "me-south-1"
    EU_SOUTH_1 = "eu-south-1"
    AF_SOUTH_1 = "af-south-1"

