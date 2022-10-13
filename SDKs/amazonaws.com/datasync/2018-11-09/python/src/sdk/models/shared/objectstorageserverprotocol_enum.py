from dataclasses import dataclass, field
from typing import Enum

class ObjectStorageServerProtocolEnum(str, Enum):
    HTTPS = "HTTPS"
    HTTP = "HTTP"

