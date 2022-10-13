from dataclasses import dataclass, field
from typing import Enum
from dataclasses_json import dataclass_json
from . import gatewayroutestatuscode_enum


@dataclass_json
@dataclass
class GatewayRouteStatus:
    status: gatewayroutestatuscode_enum.GatewayRouteStatusCodeEnum = field(default=None, metadata={'dataclasses_json': { 'field_name': 'status' }})
    
