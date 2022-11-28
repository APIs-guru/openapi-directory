from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class InstanceFleetProvisioningSpecifications:
    r"""InstanceFleetProvisioningSpecifications
    <p>The launch specification for Spot Instances in the fleet, which determines the defined duration, provisioning timeout behavior, and allocation strategy.</p> <note> <p>The instance fleet configuration is available only in Amazon EMR versions 4.8.0 and later, excluding 5.0.x versions. On-Demand and Spot Instance allocation strategies are available in Amazon EMR version 5.12.1 and later.</p> </note>
    """
    
    on_demand_specification: Optional[OnDemandProvisioningSpecification] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('OnDemandSpecification') }})
    spot_specification: Optional[SpotProvisioningSpecification] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('SpotSpecification') }})
    
