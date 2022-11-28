from dataclasses import dataclass, field
from typing import List,Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class EndpointGroup:
    r"""EndpointGroup
    A complex type for the endpoint group. An AWS Region can have only one endpoint group for a specific listener. 
    """
    
    endpoint_descriptions: Optional[List[EndpointDescription]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('EndpointDescriptions') }})
    endpoint_group_arn: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('EndpointGroupArn') }})
    endpoint_group_region: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('EndpointGroupRegion') }})
    health_check_interval_seconds: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('HealthCheckIntervalSeconds') }})
    health_check_path: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('HealthCheckPath') }})
    health_check_port: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('HealthCheckPort') }})
    health_check_protocol: Optional[HealthCheckProtocolEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('HealthCheckProtocol') }})
    port_overrides: Optional[List[PortOverride]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('PortOverrides') }})
    threshold_count: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ThresholdCount') }})
    traffic_dial_percentage: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('TrafficDialPercentage') }})
    
