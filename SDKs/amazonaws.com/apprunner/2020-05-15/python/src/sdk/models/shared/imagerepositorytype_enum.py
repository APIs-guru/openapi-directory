from dataclasses import dataclass, field
from enum import Enum

class ImageRepositoryTypeEnum(str, Enum):
    ECR = "ECR"
    ECR_PUBLIC = "ECR_PUBLIC"

