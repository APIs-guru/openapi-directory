from dataclasses import dataclass, field
from enum import Enum

class SourceTypeEnum(str, Enum):
    CACHE_CLUSTER = "cache-cluster"
    CACHE_PARAMETER_GROUP = "cache-parameter-group"
    CACHE_SECURITY_GROUP = "cache-security-group"
    CACHE_SUBNET_GROUP = "cache-subnet-group"
    REPLICATION_GROUP = "replication-group"
    USER = "user"
    USER_GROUP = "user-group"

