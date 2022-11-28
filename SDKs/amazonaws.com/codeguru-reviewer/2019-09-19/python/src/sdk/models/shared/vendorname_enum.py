from dataclasses import dataclass, field
from enum import Enum

class VendorNameEnum(str, Enum):
    GIT_HUB = "GitHub"
    GIT_LAB = "GitLab"
    NATIVE_S3 = "NativeS3"

