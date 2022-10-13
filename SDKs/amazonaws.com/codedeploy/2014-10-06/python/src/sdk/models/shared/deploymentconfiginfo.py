from dataclasses import dataclass, field
from datetime import datetime
from marshmallow import fields
import dateutil.parser
from typing import Enum,Optional
from dataclasses_json import dataclass_json
from . import computeplatform_enum
from . import minimumhealthyhosts
from . import trafficroutingconfig


@dataclass_json
@dataclass
class DeploymentConfigInfo:
    compute_platform: Optional[computeplatform_enum.ComputePlatformEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'computePlatform' }})
    create_time: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'createTime', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    deployment_config_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'deploymentConfigId' }})
    deployment_config_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'deploymentConfigName' }})
    minimum_healthy_hosts: Optional[minimumhealthyhosts.MinimumHealthyHosts] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'minimumHealthyHosts' }})
    traffic_routing_config: Optional[trafficroutingconfig.TrafficRoutingConfig] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'trafficRoutingConfig' }})
    
