from dataclasses import dataclass, field
from enum import Enum

class TrafficMirrorSessionFieldEnum(str, Enum):
    PACKET_LENGTH = "packet-length"
    DESCRIPTION = "description"
    VIRTUAL_NETWORK_ID = "virtual-network-id"

