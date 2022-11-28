from dataclasses import dataclass, field
from enum import Enum

class ElasticGpuStatusEnum(str, Enum):
    OK = "OK"
    IMPAIRED = "IMPAIRED"

