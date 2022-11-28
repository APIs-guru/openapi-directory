from dataclasses import dataclass, field
from enum import Enum

class ConnectionOAuthHTTPMethodEnum(str, Enum):
    GET = "GET"
    POST = "POST"
    PUT = "PUT"

