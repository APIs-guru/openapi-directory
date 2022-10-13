from dataclasses import dataclass, field
from typing import Enum,List,Optional
from dataclasses_json import dataclass_json
from . import endpointconfiguration
from . import healthcheckprotocol_enum
from . import portoverride


@dataclass_json
@dataclass
class UpdateEndpointGroupRequest:
    endpoint_configurations: Optional[List[endpointconfiguration.EndpointConfiguration]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'EndpointConfigurations' }})
    endpoint_group_arn: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'EndpointGroupArn' }})
    health_check_interval_seconds: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'HealthCheckIntervalSeconds' }})
    health_check_path: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'HealthCheckPath' }})
    health_check_port: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'HealthCheckPort' }})
    health_check_protocol: Optional[healthcheckprotocol_enum.HealthCheckProtocolEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'HealthCheckProtocol' }})
    port_overrides: Optional[List[portoverride.PortOverride]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'PortOverrides' }})
    threshold_count: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ThresholdCount' }})
    traffic_dial_percentage: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'TrafficDialPercentage' }})
    
