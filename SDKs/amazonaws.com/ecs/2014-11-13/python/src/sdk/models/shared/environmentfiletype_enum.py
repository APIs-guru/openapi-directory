from dataclasses import dataclass, field
from enum import Enum

class EnvironmentFileTypeEnum(str, Enum):
    S3 = "s3"

