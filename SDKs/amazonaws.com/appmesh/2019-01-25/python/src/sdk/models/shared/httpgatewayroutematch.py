from dataclasses import dataclass, field
from typing import Enum,List,Optional
from dataclasses_json import dataclass_json
from . import httpgatewayrouteheader
from . import gatewayroutehostnamematch
from . import httpmethod_enum
from . import httppathmatch
from . import httpqueryparameter


@dataclass_json
@dataclass
class HTTPGatewayRouteMatch:
    headers: Optional[List[httpgatewayrouteheader.HTTPGatewayRouteHeader]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'headers' }})
    hostname: Optional[gatewayroutehostnamematch.GatewayRouteHostnameMatch] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'hostname' }})
    method: Optional[httpmethod_enum.HTTPMethodEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'method' }})
    path: Optional[httppathmatch.HTTPPathMatch] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'path' }})
    prefix: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'prefix' }})
    query_parameters: Optional[List[httpqueryparameter.HTTPQueryParameter]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'queryParameters' }})
    
