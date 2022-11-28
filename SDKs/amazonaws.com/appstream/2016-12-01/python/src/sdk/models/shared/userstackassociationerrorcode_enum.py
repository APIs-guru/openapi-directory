from dataclasses import dataclass, field
from enum import Enum

class UserStackAssociationErrorCodeEnum(str, Enum):
    STACK_NOT_FOUND = "STACK_NOT_FOUND"
    USER_NAME_NOT_FOUND = "USER_NAME_NOT_FOUND"
    DIRECTORY_NOT_FOUND = "DIRECTORY_NOT_FOUND"
    INTERNAL_ERROR = "INTERNAL_ERROR"

