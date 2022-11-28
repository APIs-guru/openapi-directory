from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import List,Optional
from enum import Enum
from . import *


@dataclass
class SpotFleetRequestConfigData:
    r"""SpotFleetRequestConfigData
    Describes the configuration of a Spot Fleet request.
    """
    
    iam_fleet_role: str = field()
    target_capacity: int = field()
    allocation_strategy: Optional[AllocationStrategyEnum] = field(default=None)
    client_token: Optional[str] = field(default=None)
    context: Optional[str] = field(default=None)
    excess_capacity_termination_policy: Optional[ExcessCapacityTerminationPolicyEnum] = field(default=None)
    fulfilled_capacity: Optional[float] = field(default=None)
    instance_interruption_behavior: Optional[InstanceInterruptionBehaviorEnum] = field(default=None)
    instance_pools_to_use_count: Optional[int] = field(default=None)
    launch_specifications: Optional[List[SpotFleetLaunchSpecification]] = field(default=None)
    launch_template_configs: Optional[List[LaunchTemplateConfig]] = field(default=None)
    load_balancers_config: Optional[LoadBalancersConfig] = field(default=None)
    on_demand_allocation_strategy: Optional[OnDemandAllocationStrategyEnum] = field(default=None)
    on_demand_fulfilled_capacity: Optional[float] = field(default=None)
    on_demand_max_total_price: Optional[str] = field(default=None)
    on_demand_target_capacity: Optional[int] = field(default=None)
    replace_unhealthy_instances: Optional[bool] = field(default=None)
    spot_maintenance_strategies: Optional[SpotMaintenanceStrategies] = field(default=None)
    spot_max_total_price: Optional[str] = field(default=None)
    spot_price: Optional[str] = field(default=None)
    tag_specifications: Optional[List[TagSpecification]] = field(default=None)
    terminate_instances_with_expiration: Optional[bool] = field(default=None)
    type: Optional[FleetTypeEnum] = field(default=None)
    valid_from: Optional[datetime] = field(default=None)
    valid_until: Optional[datetime] = field(default=None)
    
