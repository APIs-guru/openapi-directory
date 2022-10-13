from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import connectionbodyparameter
from . import connectionheaderparameter
from . import connectionquerystringparameter


@dataclass_json
@dataclass
class ConnectionHTTPParameters:
    body_parameters: Optional[List[connectionbodyparameter.ConnectionBodyParameter]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'BodyParameters' }})
    header_parameters: Optional[List[connectionheaderparameter.ConnectionHeaderParameter]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'HeaderParameters' }})
    query_string_parameters: Optional[List[connectionquerystringparameter.ConnectionQueryStringParameter]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'QueryStringParameters' }})
    
