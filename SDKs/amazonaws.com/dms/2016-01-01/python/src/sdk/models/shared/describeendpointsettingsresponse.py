from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import endpointsetting


@dataclass_json
@dataclass
class DescribeEndpointSettingsResponse:
    endpoint_settings: Optional[List[endpointsetting.EndpointSetting]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'EndpointSettings' }})
    marker: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Marker' }})
    
