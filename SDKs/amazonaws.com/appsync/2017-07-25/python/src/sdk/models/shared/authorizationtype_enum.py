from dataclasses import dataclass, field
from typing import Enum

class AuthorizationTypeEnum(str, Enum):
    AWS_IAM = "AWS_IAM"

