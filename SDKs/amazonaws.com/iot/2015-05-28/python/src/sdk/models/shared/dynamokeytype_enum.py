from dataclasses import dataclass, field
from enum import Enum

class DynamoKeyTypeEnum(str, Enum):
    STRING = "STRING"
    NUMBER = "NUMBER"

