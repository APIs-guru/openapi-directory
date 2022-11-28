from dataclasses import dataclass, field
from typing import Optional
from enum import Enum
from . import *


@dataclass
class InstanceMetadataOptionsResponse:
    r"""InstanceMetadataOptionsResponse
    The metadata options for the instance.
    """
    
    http_endpoint: Optional[InstanceMetadataEndpointStateEnum] = field(default=None)
    http_protocol_ipv6: Optional[InstanceMetadataProtocolStateEnum] = field(default=None)
    http_put_response_hop_limit: Optional[int] = field(default=None)
    http_tokens: Optional[HTTPTokensStateEnum] = field(default=None)
    state: Optional[InstanceMetadataOptionsStateEnum] = field(default=None)
    
