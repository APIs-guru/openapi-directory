from dataclasses import dataclass, field
from enum import Enum

class SslSupportMethodEnum(str, Enum):
    SNI_ONLY = "sni-only"
    VIP = "vip"

