from dataclasses import dataclass, field
from enum import Enum

class RelationalDatabaseSourceTypeEnum(str, Enum):
    RDS_HTTP_ENDPOINT = "RDS_HTTP_ENDPOINT"

