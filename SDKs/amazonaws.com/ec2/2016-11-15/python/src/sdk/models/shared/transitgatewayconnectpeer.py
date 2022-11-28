from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import List,Optional
from enum import Enum
from . import *


@dataclass
class TransitGatewayConnectPeer:
    r"""TransitGatewayConnectPeer
    Describes a transit gateway Connect peer.
    """
    
    connect_peer_configuration: Optional[TransitGatewayConnectPeerConfiguration] = field(default=None)
    creation_time: Optional[datetime] = field(default=None)
    state: Optional[TransitGatewayConnectPeerStateEnum] = field(default=None)
    tags: Optional[List[Tag]] = field(default=None)
    transit_gateway_attachment_id: Optional[str] = field(default=None)
    transit_gateway_connect_peer_id: Optional[str] = field(default=None)
    
