from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class HTTPParameters:
    header_parameters: Optional[dict[str, str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'HeaderParameters' }})
    path_parameter_values: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'PathParameterValues' }})
    query_string_parameters: Optional[dict[str, str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'QueryStringParameters' }})
    
