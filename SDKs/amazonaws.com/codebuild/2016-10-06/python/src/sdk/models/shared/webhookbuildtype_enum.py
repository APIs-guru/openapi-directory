from dataclasses import dataclass, field
from typing import Enum

class WebhookBuildTypeEnum(str, Enum):
    BUILD = "BUILD"
    BUILD_BATCH = "BUILD_BATCH"

