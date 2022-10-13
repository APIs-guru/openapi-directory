from dataclasses import dataclass, field
from typing import Enum

class ConnectionOAuthHTTPMethodEnum(str, Enum):
    GET = "GET"
    POST = "POST"
    PUT = "PUT"

