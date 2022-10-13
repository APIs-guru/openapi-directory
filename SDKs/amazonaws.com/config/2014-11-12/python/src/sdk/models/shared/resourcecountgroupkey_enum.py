from dataclasses import dataclass, field
from typing import Enum

class ResourceCountGroupKeyEnum(str, Enum):
    RESOURCE_TYPE = "RESOURCE_TYPE"
    ACCOUNT_ID = "ACCOUNT_ID"
    AWS_REGION = "AWS_REGION"

