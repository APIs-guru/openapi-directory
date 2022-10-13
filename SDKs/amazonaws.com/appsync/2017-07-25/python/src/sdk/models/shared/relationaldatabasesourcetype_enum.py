from dataclasses import dataclass, field
from typing import Enum

class RelationalDatabaseSourceTypeEnum(str, Enum):
    RDS_HTTP_ENDPOINT = "RDS_HTTP_ENDPOINT"

