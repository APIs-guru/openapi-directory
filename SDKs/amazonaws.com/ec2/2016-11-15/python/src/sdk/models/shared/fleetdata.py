from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import List,Optional
from enum import Enum
from . import *


@dataclass
class FleetData:
    r"""FleetData
    Describes an EC2 Fleet.
    """
    
    activity_status: Optional[FleetActivityStatusEnum] = field(default=None)
    client_token: Optional[str] = field(default=None)
    context: Optional[str] = field(default=None)
    create_time: Optional[datetime] = field(default=None)
    errors: Optional[List[DescribeFleetError]] = field(default=None)
    excess_capacity_termination_policy: Optional[FleetExcessCapacityTerminationPolicyEnum] = field(default=None)
    fleet_id: Optional[str] = field(default=None)
    fleet_state: Optional[FleetStateCodeEnum] = field(default=None)
    fulfilled_capacity: Optional[float] = field(default=None)
    fulfilled_on_demand_capacity: Optional[float] = field(default=None)
    instances: Optional[List[DescribeFleetsInstances]] = field(default=None)
    launch_template_configs: Optional[List[FleetLaunchTemplateConfig]] = field(default=None)
    on_demand_options: Optional[OnDemandOptions] = field(default=None)
    replace_unhealthy_instances: Optional[bool] = field(default=None)
    spot_options: Optional[SpotOptions] = field(default=None)
    tags: Optional[List[Tag]] = field(default=None)
    target_capacity_specification: Optional[TargetCapacitySpecification] = field(default=None)
    terminate_instances_with_expiration: Optional[bool] = field(default=None)
    type: Optional[FleetTypeEnum] = field(default=None)
    valid_from: Optional[datetime] = field(default=None)
    valid_until: Optional[datetime] = field(default=None)
    
