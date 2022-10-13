from dataclasses import dataclass, field
from typing import Enum

class SslSecurityProtocolValueEnum(str, Enum):
    PLAINTEXT = "plaintext"
    SSL_ENCRYPTION = "ssl-encryption"

