from dataclasses import dataclass, field
from typing import Enum

class APIDestinationHTTPMethodEnum(str, Enum):
    POST = "POST"
    GET = "GET"
    HEAD = "HEAD"
    OPTIONS = "OPTIONS"
    PUT = "PUT"
    PATCH = "PATCH"
    DELETE = "DELETE"

