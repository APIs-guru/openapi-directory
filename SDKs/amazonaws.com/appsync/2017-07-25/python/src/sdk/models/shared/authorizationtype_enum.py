from dataclasses import dataclass, field
from enum import Enum

class AuthorizationTypeEnum(str, Enum):
    AWS_IAM = "AWS_IAM"

