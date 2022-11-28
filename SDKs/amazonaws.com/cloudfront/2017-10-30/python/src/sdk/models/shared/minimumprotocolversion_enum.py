from dataclasses import dataclass, field
from enum import Enum

class MinimumProtocolVersionEnum(str, Enum):
    SS_LV3 = "SSLv3"
    TL_SV1 = "TLSv1"
    TL_SV1_2016 = "TLSv1_2016"
    TL_SV1_1_2016 = "TLSv1.1_2016"
    TL_SV1_2_2018 = "TLSv1.2_2018"

