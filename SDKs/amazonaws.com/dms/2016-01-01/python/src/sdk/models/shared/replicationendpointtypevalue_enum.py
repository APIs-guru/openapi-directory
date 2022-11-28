from dataclasses import dataclass, field
from enum import Enum

class ReplicationEndpointTypeValueEnum(str, Enum):
    SOURCE = "source"
    TARGET = "target"

