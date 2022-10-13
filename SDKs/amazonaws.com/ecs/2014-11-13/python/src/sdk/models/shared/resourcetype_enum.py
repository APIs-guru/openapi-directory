from dataclasses import dataclass, field
from typing import Enum

class ResourceTypeEnum(str, Enum):
    GPU = "GPU"
    INFERENCE_ACCELERATOR = "InferenceAccelerator"

