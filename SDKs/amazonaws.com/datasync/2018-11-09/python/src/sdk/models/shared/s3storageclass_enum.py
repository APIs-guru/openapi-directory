from dataclasses import dataclass, field
from enum import Enum

class S3StorageClassEnum(str, Enum):
    STANDARD = "STANDARD"
    STANDARD_IA = "STANDARD_IA"
    ONEZONE_IA = "ONEZONE_IA"
    INTELLIGENT_TIERING = "INTELLIGENT_TIERING"
    GLACIER = "GLACIER"
    DEEP_ARCHIVE = "DEEP_ARCHIVE"
    OUTPOSTS = "OUTPOSTS"

