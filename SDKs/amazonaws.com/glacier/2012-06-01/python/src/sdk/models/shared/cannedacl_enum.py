from dataclasses import dataclass, field
from typing import Enum

class CannedACLEnum(str, Enum):
    PRIVATE = "private"
    PUBLIC_READ = "public-read"
    PUBLIC_READ_WRITE = "public-read-write"
    AWS_EXEC_READ = "aws-exec-read"
    AUTHENTICATED_READ = "authenticated-read"
    BUCKET_OWNER_READ = "bucket-owner-read"
    BUCKET_OWNER_FULL_CONTROL = "bucket-owner-full-control"

