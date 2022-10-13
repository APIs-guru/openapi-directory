from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import supportedendpointtype


@dataclass_json
@dataclass
class DescribeEndpointTypesResponse:
    marker: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Marker' }})
    supported_endpoint_types: Optional[List[supportedendpointtype.SupportedEndpointType]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'SupportedEndpointTypes' }})
    
