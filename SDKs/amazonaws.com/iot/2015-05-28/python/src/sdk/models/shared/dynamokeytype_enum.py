from dataclasses import dataclass, field
from typing import Enum

class DynamoKeyTypeEnum(str, Enum):
    STRING = "STRING"
    NUMBER = "NUMBER"

