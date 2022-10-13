from dataclasses import dataclass, field
from typing import Enum

class IntegrationTypeEnum(str, Enum):
    HTTP = "HTTP"
    AWS = "AWS"
    MOCK = "MOCK"
    HTTP_PROXY = "HTTP_PROXY"
    AWS_PROXY = "AWS_PROXY"

