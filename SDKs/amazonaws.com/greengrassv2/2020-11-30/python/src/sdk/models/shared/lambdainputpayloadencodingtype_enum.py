from dataclasses import dataclass, field
from enum import Enum

class LambdaInputPayloadEncodingTypeEnum(str, Enum):
    JSON = "json"
    BINARY = "binary"

