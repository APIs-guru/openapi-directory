from dataclasses import dataclass, field
from typing import Enum

class TrafficMirrorFilterRuleFieldEnum(str, Enum):
    DESTINATION_PORT_RANGE = "destination-port-range"
    SOURCE_PORT_RANGE = "source-port-range"
    PROTOCOL = "protocol"
    DESCRIPTION = "description"

