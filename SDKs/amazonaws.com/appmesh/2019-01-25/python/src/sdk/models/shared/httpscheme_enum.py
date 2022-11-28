from dataclasses import dataclass, field
from enum import Enum

class HTTPSchemeEnum(str, Enum):
    HTTP = "http"
    HTTPS = "https"

