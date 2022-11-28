from dataclasses import dataclass, field
from enum import Enum

class AuthorizationTypeEnum(str, Enum):
    NONE = "NONE"
    AWS_IAM = "AWS_IAM"
    CUSTOM = "CUSTOM"
    JWT = "JWT"

