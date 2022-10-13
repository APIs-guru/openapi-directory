from dataclasses import dataclass, field
from typing import Enum

class TrafficMirrorSessionFieldEnum(str, Enum):
    PACKET_LENGTH = "packet-length"
    DESCRIPTION = "description"
    VIRTUAL_NETWORK_ID = "virtual-network-id"

