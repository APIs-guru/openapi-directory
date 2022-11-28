from dataclasses import dataclass, field
from enum import Enum

class RevisionLocationTypeEnum(str, Enum):
    S3 = "S3"
    GIT_HUB = "GitHub"
    STRING = "String"
    APP_SPEC_CONTENT = "AppSpecContent"

