from dataclasses import dataclass, field
from enum import Enum

class SafeguardPolicyEnum(str, Enum):
    RELY_ON_SQL_SERVER_REPLICATION_AGENT = "rely-on-sql-server-replication-agent"
    EXCLUSIVE_AUTOMATIC_TRUNCATION = "exclusive-automatic-truncation"
    SHARED_AUTOMATIC_TRUNCATION = "shared-automatic-truncation"

