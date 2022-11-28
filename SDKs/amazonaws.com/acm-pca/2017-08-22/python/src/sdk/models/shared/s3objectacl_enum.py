from dataclasses import dataclass, field
from enum import Enum

class S3ObjectACLEnum(str, Enum):
    PUBLIC_READ = "PUBLIC_READ"
    BUCKET_OWNER_FULL_CONTROL = "BUCKET_OWNER_FULL_CONTROL"

