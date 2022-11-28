from dataclasses import dataclass, field
from enum import Enum

class CannedAccessControlListEnum(str, Enum):
    PRIVATE = "private"
    PUBLIC_READ = "public-read"
    PUBLIC_READ_WRITE = "public-read-write"
    AWS_EXEC_READ = "aws-exec-read"
    AUTHENTICATED_READ = "authenticated-read"
    BUCKET_OWNER_READ = "bucket-owner-read"
    BUCKET_OWNER_FULL_CONTROL = "bucket-owner-full-control"
    LOG_DELIVERY_WRITE = "log-delivery-write"

