from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import iprouteinfo


@dataclass_json
@dataclass
class ListIPRoutesResult:
    ip_routes_info: Optional[List[iprouteinfo.IPRouteInfo]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'IpRoutesInfo' }})
    next_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'NextToken' }})
    
