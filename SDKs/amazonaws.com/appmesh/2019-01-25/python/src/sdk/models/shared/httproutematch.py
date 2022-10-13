from dataclasses import dataclass, field
from typing import Enum,List,Optional
from dataclasses_json import dataclass_json
from . import httprouteheader
from . import httpmethod_enum
from . import httppathmatch
from . import httpqueryparameter
from . import httpscheme_enum


@dataclass_json
@dataclass
class HTTPRouteMatch:
    headers: Optional[List[httprouteheader.HTTPRouteHeader]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'headers' }})
    method: Optional[httpmethod_enum.HTTPMethodEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'method' }})
    path: Optional[httppathmatch.HTTPPathMatch] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'path' }})
    prefix: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'prefix' }})
    query_parameters: Optional[List[httpqueryparameter.HTTPQueryParameter]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'queryParameters' }})
    scheme: Optional[httpscheme_enum.HTTPSchemeEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'scheme' }})
    
