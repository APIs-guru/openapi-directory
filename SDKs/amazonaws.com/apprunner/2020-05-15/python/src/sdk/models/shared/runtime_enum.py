from dataclasses import dataclass, field
from typing import Enum

class RuntimeEnum(str, Enum):
    PYTHON_3 = "PYTHON_3"
    NODEJS_12 = "NODEJS_12"

