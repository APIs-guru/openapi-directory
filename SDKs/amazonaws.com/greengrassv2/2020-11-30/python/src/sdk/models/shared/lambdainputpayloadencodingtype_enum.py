from dataclasses import dataclass, field
from typing import Enum

class LambdaInputPayloadEncodingTypeEnum(str, Enum):
    JSON = "json"
    BINARY = "binary"

