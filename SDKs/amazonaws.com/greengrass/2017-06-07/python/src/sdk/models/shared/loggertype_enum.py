from dataclasses import dataclass, field
from typing import Enum

class LoggerTypeEnum(str, Enum):
    FILE_SYSTEM = "FileSystem"
    AWS_CLOUD_WATCH = "AWSCloudWatch"

