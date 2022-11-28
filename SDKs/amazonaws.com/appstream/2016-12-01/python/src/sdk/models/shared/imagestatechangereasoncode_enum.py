from dataclasses import dataclass, field
from enum import Enum

class ImageStateChangeReasonCodeEnum(str, Enum):
    INTERNAL_ERROR = "INTERNAL_ERROR"
    IMAGE_BUILDER_NOT_AVAILABLE = "IMAGE_BUILDER_NOT_AVAILABLE"
    IMAGE_COPY_FAILURE = "IMAGE_COPY_FAILURE"

