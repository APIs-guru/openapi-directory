from dataclasses import dataclass, field
from typing import Enum

class ComputePlatformEnum(str, Enum):
    DEFAULT = "Default"
    AWS_LAMBDA = "AWSLambda"

