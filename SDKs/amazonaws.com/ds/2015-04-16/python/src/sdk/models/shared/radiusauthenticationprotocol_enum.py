from dataclasses import dataclass, field
from typing import Enum

class RadiusAuthenticationProtocolEnum(str, Enum):
    PAP = "PAP"
    CHAP = "CHAP"
    MS_CHA_PV1 = "MS-CHAPv1"
    MS_CHA_PV2 = "MS-CHAPv2"

