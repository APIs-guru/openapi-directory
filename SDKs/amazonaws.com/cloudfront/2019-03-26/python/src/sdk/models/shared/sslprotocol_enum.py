from dataclasses import dataclass, field
from enum import Enum

class SslProtocolEnum(str, Enum):
    SS_LV3 = "SSLv3"
    TL_SV1 = "TLSv1"
    TL_SV1_1 = "TLSv1.1"
    TL_SV1_2 = "TLSv1.2"

