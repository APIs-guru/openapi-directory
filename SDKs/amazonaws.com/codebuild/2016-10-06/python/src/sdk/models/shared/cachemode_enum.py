from dataclasses import dataclass, field
from enum import Enum

class CacheModeEnum(str, Enum):
    LOCAL_DOCKER_LAYER_CACHE = "LOCAL_DOCKER_LAYER_CACHE"
    LOCAL_SOURCE_CACHE = "LOCAL_SOURCE_CACHE"
    LOCAL_CUSTOM_CACHE = "LOCAL_CUSTOM_CACHE"

