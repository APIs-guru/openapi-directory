from dataclasses import dataclass, field
from enum import Enum

class MethodEnum(str, Enum):
    GET = "GET"
    HEAD = "HEAD"
    POST = "POST"
    PUT = "PUT"
    PATCH = "PATCH"
    OPTIONS = "OPTIONS"
    DELETE = "DELETE"

