from dataclasses import dataclass, field
from enum import Enum

class WebhookBuildTypeEnum(str, Enum):
    BUILD = "BUILD"
    BUILD_BATCH = "BUILD_BATCH"

