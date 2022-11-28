from dataclasses import dataclass, field
from enum import Enum

class ImageBuilderStateChangeReasonCodeEnum(str, Enum):
    INTERNAL_ERROR = "INTERNAL_ERROR"
    IMAGE_UNAVAILABLE = "IMAGE_UNAVAILABLE"

