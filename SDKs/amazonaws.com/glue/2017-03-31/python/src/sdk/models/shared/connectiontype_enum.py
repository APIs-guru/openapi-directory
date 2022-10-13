from dataclasses import dataclass, field
from typing import Enum

class ConnectionTypeEnum(str, Enum):
    JDBC = "JDBC"
    SFTP = "SFTP"
    MONGODB = "MONGODB"
    KAFKA = "KAFKA"
    NETWORK = "NETWORK"
    MARKETPLACE = "MARKETPLACE"
    CUSTOM = "CUSTOM"

