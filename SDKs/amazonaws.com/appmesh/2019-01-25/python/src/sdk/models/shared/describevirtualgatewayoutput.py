from dataclasses import dataclass, field
from dataclasses_json import dataclass_json
from . import virtualgatewaydata


@dataclass_json
@dataclass
class DescribeVirtualGatewayOutput:
    virtual_gateway: virtualgatewaydata.VirtualGatewayData = field(default=None, metadata={'dataclasses_json': { 'field_name': 'virtualGateway' }})
    
