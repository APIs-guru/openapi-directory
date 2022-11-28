from dataclasses import dataclass, field
from enum import Enum

class LogDestinationTypeEnum(str, Enum):
    CLOUD_WATCH_LOGS = "cloud-watch-logs"
    S3 = "s3"

