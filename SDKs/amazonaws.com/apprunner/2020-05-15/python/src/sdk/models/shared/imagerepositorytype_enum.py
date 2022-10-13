from dataclasses import dataclass, field
from typing import Enum

class ImageRepositoryTypeEnum(str, Enum):
    ECR = "ECR"
    ECR_PUBLIC = "ECR_PUBLIC"

