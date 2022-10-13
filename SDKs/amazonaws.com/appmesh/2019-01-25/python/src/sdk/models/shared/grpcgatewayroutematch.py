from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import gatewayroutehostnamematch
from . import grpcgatewayroutemetadata


@dataclass_json
@dataclass
class GrpcGatewayRouteMatch:
    hostname: Optional[gatewayroutehostnamematch.GatewayRouteHostnameMatch] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'hostname' }})
    metadata: Optional[List[grpcgatewayroutemetadata.GrpcGatewayRouteMetadata]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'metadata' }})
    service_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'serviceName' }})
    
