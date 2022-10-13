from dataclasses import dataclass, field
from typing import Enum

class HTTPSchemeEnum(str, Enum):
    HTTP = "http"
    HTTPS = "https"

