from dataclasses import dataclass, field
from typing import Enum

class SourceTypeEnum(str, Enum):
    CODECOMMIT = "CODECOMMIT"
    CODEPIPELINE = "CODEPIPELINE"
    GITHUB = "GITHUB"
    S3 = "S3"
    BITBUCKET = "BITBUCKET"
    GITHUB_ENTERPRISE = "GITHUB_ENTERPRISE"
    NO_SOURCE = "NO_SOURCE"

