from dataclasses import dataclass, field
from enum import Enum

class ProtocolEnumEnum(str, Enum):
    HTTP = "HTTP"
    HTTPS = "HTTPS"
    TCP = "TCP"
    TLS = "TLS"
    UDP = "UDP"
    TCP_UDP = "TCP_UDP"
    GENEVE = "GENEVE"

