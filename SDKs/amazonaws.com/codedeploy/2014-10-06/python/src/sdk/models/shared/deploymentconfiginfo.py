from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class DeploymentConfigInfo:
    r"""DeploymentConfigInfo
    Information about a deployment configuration.
    """
    
    compute_platform: Optional[ComputePlatformEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('computePlatform') }})
    create_time: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('createTime'), 'encoder': utils.datetimeisoformat(True), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    deployment_config_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('deploymentConfigId') }})
    deployment_config_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('deploymentConfigName') }})
    minimum_healthy_hosts: Optional[MinimumHealthyHosts] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('minimumHealthyHosts') }})
    traffic_routing_config: Optional[TrafficRoutingConfig] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('trafficRoutingConfig') }})
    
