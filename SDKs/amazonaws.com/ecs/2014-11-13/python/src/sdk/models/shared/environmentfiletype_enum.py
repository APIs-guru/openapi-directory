from dataclasses import dataclass, field
from typing import Enum

class EnvironmentFileTypeEnum(str, Enum):
    S3 = "s3"

