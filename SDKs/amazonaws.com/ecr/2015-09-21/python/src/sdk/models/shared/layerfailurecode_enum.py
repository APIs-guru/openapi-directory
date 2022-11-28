from dataclasses import dataclass, field
from enum import Enum

class LayerFailureCodeEnum(str, Enum):
    INVALID_LAYER_DIGEST = "InvalidLayerDigest"
    MISSING_LAYER_DIGEST = "MissingLayerDigest"

