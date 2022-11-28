from dataclasses import dataclass, field
from enum import Enum

class SourceRepositoryEnum(str, Enum):
    CODE_COMMIT = "CodeCommit"
    S3 = "S3"

