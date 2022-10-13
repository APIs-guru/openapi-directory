from dataclasses import dataclass, field
from typing import Enum

class ReplicationEndpointTypeValueEnum(str, Enum):
    SOURCE = "source"
    TARGET = "target"

