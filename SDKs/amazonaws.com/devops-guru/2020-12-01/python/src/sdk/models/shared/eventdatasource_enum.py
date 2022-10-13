from dataclasses import dataclass, field
from typing import Enum

class EventDataSourceEnum(str, Enum):
    AWS_CLOUD_TRAIL = "AWS_CLOUD_TRAIL"
    AWS_CODE_DEPLOY = "AWS_CODE_DEPLOY"

